const express = require("express");
const app = express();
const { signUp, getUser } = require("./db.js");
const compression = require("compression");
const path = require("path");
const { hash, compare } = require("./bc");
const cookieSession = require("cookie-session");
const { match } = require("assert");
csurf = require("csurf");

app.use(express.json());

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: "1000 * 60 * 60 * 24 * 14s",
    })
);

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post("/login", (req, res) => {
    console.log("post login");
    const { email, password } = req.body;
    getUser(email)
        .then((data) => {
            compare(password, data.rows[0].password)
                .then((match) => {
                    if (match) {
                        console.log("pw matched!");
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
