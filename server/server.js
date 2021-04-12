const express = require("express");
const app = express();
const {
    signUp,
    getUser,
    getCode,
    getCode2,
    newPass,
    userInfo,
    insertPic,
    updateBio,
    getUserInfo,
    lastThreeUsers,
} = require("./db.js");
const compression = require("compression");
const path = require("path");
const { hash, compare } = require("./bc");
const cookieSession = require("cookie-session");
const { match } = require("assert");
const { json } = require("express");
const cryptoRandomString = require("crypto-random-string");
const { sendEmail } = require("./ses.js");
csurf = require("csurf");
const multer = require("multer");
const uidSafe = require("uid-safe");
const s3 = require("./s3");
const { s3Url } = require("./config.json");

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: "1000 * 60 * 60 * 24 * 14s",
    })
);
app.use(compression());

app.use(express.json());

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function (uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    },
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152,
    },
});

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post("/login", (req, res) => {
    console.log("post login");
    const { email, password } = req.body;
    getUser(email)
        .then((data) => {
            compare(password, data.rows[0].password)
                .then((match) => {
                    if (match) {
                        console.log(data.rows);
                        console.log("pw matched!");
                        req.session.userId = data.rows[0].id;
                        res.json({
                            success: true,
                        });
                    } else if (!match) {
                        console.log("no match!");
                        res.json({
                            success: false,
                        });
                    }
                })
                .catch((err) => {
                    console.log("error in compara", err);
                });
        })
        .catch((err) => {
            console.log("error in getUser", err);
        });
});

app.post("/register", (req, res) => {
    console.log("post register");
    const { first, last, email, password } = req.body;
    if (first == "" || last == "" || email == "" || password == "") {
        return res.json({ error: true });
    } else {
        hash(password)
            .then((saltedPass) => {
                console.log("hash pass", saltedPass);
                return signUp(first, last, email, saltedPass).then((data) => {
                    req.session.userId = data.rows[0].id;
                    console.log("userid", req.session.userId);
                    res.json({
                        success: true,
                    });
                });
            })
            .catch((err) => {
                console.log("post err register", err);
            });
    }
});

app.post("/reset/step2", (req, res) => {
    const { email } = req.body;
    getUser(email)
        .then((data) => {
            if (data.rows < 1) {
                console.log("no email match");
                return res.json({ error: true });
            } else {
                const { first } = data.rows[0];
                const code = cryptoRandomString({
                    length: 8,
                });
                getCode(email, code)
                    .then(({ rows }) => {
                        const subject = "Reset your password";
                        const body = `Hello ${first},
                Here you can find your secert code ${code}.`;
                        sendEmail(email, body, subject).then(() => {
                            res.json({
                                success: true,
                            });
                        });
                    })
                    .catch((err) => console.log("err at getcode", err));
            }
        })
        .catch((err) => console.log("err at server", err));
});

app.post("/reset/step3", (req, res) => {
    const { email, code, newpassword } = req.body;
    getCode2(email).then(({ rows }) => {
        if (rows[0].code != code) {
            console.log("code no good");
            res.json({ error: true });
        } else {
            hash(newpassword)
                .then((saltedPass) => {
                    newPass(saltedPass, email).then(() => {
                        console.log(saltedPass, email);
                        res.json({ success: true, error: false });
                    });
                })
                .catch((err) => console.log("err hash step 3", err));
        }
    });
});

app.get("/user", (req, res) => {
    userInfo(req.session.userId).then((data) => {
        res.json({
            first: data.rows[0].first,
            last: data.rows[0].last,
            profilepic: data.rows[0].profilepic,
            bio: data.rows[0].bio,
        });
    });
});

app.post("/picupload", uploader.single("file"), s3.upload, (req, res) => {
    console.log("post made");
    insertPic(s3Url + req.file.filename, req.session.userId).then((result) => {
        res.json({ success: true, result });
    });
});

app.post("/userbio", (req, res) => {
    console.log("post userbio");
    updateBio(req.body.bio, req.session.userId).then((result) => {
        console.log("bio data", result);
        res.json(result.rows[0]);
    });
});

app.get("/user/:id.json", (req, res) => {
    let { userId } = req.session;
    if (userId == req.params.id) {
        req.json({ getProfile: true });
    } else {
        getUserInfo(req.params.id)
            .then((result) => {
                console.log("user", result);
                res.json(result.rows[0]);
            })
            .catch((err) => {
                console.log("err in user id", err);
            });
    }
});

app.get("/users/friends", async (req, res) => {
    const data = await lastThreeUsers();
    res.json(data);
});

app.get("/welcome", (req, res) => {
    //you will need a middleware to get this to work
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(path.join(__dirname, "..", "client", "index.html"));
    }
});

app.get("*", function (req, res) {
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(path.join(__dirname, "..", "client", "index.html"));
    }
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
