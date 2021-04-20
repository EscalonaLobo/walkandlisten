const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    allowRequest: (req, callback) =>
        callback(null, req.headers.referer.startsWith("http://localhost:3000")),
});
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
    searchUsers,
    areWeFriends,
    letsBeFriends,
    acceptFriendship,
    deleteRequest,
    getWannabeFriends,
    okToBeFriends,
    letsUnfriend,
    getChat,
    insertChatMessage,
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

// app.use(
//     cookieSession({
//         secret: `I'm always angry.`,
//         maxAge: "1000 * 60 * 60 * 24 * 14s",
//     })
// );

const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);
io.use(function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

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
        console.log("body bio", req.body);
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
                // console.log("user", result);
                res.json(result.rows[0]);
            })
            .catch((err) => {
                console.log("err in user id", err);
            });
    }
});

app.get("/users/friends", async (req, res) => {
    console.log("something /friends");
    const data = await lastThreeUsers();
    res.json(data.rows);
});

app.get("/users/friends/:query", async (req, res) => {
    console.log("something /query");
    const data = await searchUsers(req.params.query);
    res.json(data.rows);
});

app.get("/friendship/:id", async (req, res) => {
    console.log("get friendship status");
    const data = await areWeFriends(req.params.id, req.session.userId);
    console.log("friendship status data", req.params.id);
    if (!data.length) {
        res.json(data);
    } else {
        res.json([req.session.userId, data]);
    }
});

app.post("/friendship/:id", async (req, res) => {
    console.log("post friendship");
    const data = await letsBeFriends(req.params.id, req.session.userId);
    console.log("button", req.body.buttonText);
    if (req.body.buttonText == "Send friendship request") {
        res.json({ request: true });
    } else if (req.body.buttonText == "Accept friendship") {
        await acceptFriendship(req.session.userId);
        res.json({ accepted: true });
    } else if (
        req.body.buttonText == "Cancel request" ||
        req.body.buttonText == "End friendship"
    ) {
        await deleteRequest(req.params.id, req.session.userId);
        res.json({ delete: true });
    }
});

app.get("/wannabefriends", (req, res) => {
    getWannabeFriends(req.session.userId)
        .then((data) => {
            console.log("wannabe", data);
            res.json(data.rows);
        })
        .catch((err) => {
            console.log("wannabe err", err);
        });
});

app.post("/acceptfriend/:id", (req, res) => {
    okToBeFriends(req.params.id, req.session.userId)
        .then((data) => {
            console.log("okToBeFriends", data);
            res.json(data.rows);
        })
        .catch((err) => {
            console.log("okToBeFriends err", err);
        });
});

app.post("/unfriend/:id", (req, res) => {
    console.log("something unfriend");
    letsUnfriend(req.params.id, req.session.userId)
        .then((data) => {
            console.log("letsUnfriend", data);
            res.json(data.rows);
        })
        .catch((err) => {
            console.log("letsUnfriend err", err);
        });
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

// make sure you write all your socket code INSIDE io.on('connection')
io.on("connection", async (socket) => {
    // console.log(`socket id ${socket.id} is now connected`);

    const userId = socket.request.session.userId;

    // we don't want logged out users to use sockets!
    if (!userId) {
        return socket.disconnect(true);
    }

    // if user makes it to this point in the code, then it means they're logged in
    // & are successfully connected to sockets

    // this is a good place to go get the last 10 chat messages
    // we'll need to make a new table for chats
    // your db query for getting the last 10 messages will need to be a JOIN
    // you'll need info from both the users table and chats!
    // i.e. user's first name, last name, image, and chat msg
    // the most recent chat message should be displayed at the BOTTOM

    const data = await getChat();
    // console.log("data in server", data);
    io.sockets.emit("mostRecentMsgs", data);

    // getChat().then(({ rows }) => {
    //     console.log(rows);
    //     io.sockets.emit("mostRecentMsgs", rows);
    // });

    // ADDING A NEW MSG - let's listen for a new chat msg being sent from the client
    socket.on("Add a message", async (msg) => {
        console.log("This message is coming in from chat.js component: ", msg);
        console.log("user who sent that new msg just now is: ", userId);

        const data = await insertChatMessage(userId, msg);
        console.log("data on add msg", data);

        // 1. do a db query to store the new chat message into the chat table!!
        // 2. also do a db query to get info about the user (first name, last name, img) - will probably need to be a JOIN
        // once you have your chat object, you'll want to EMIT it to EVERYONE so they can see it immediately.
        io.sockets.emit("addChatMsg", data);
    });

    // 1st arg - ('My amazing chat message') - listens to the event that will be coming from chat.js
    // 2nd arg - (newMsg) - is the info that comes along with the emit from chat.js
});

server.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
