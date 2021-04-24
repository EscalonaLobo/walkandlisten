const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    allowRequest: (req, callback) =>
        callback(null, req.headers.referer.startsWith("http://localhost:3000")),
});
const {
    getChat,
    insertChatMessage,
    getUrl,
    getUrlar,
    getUrlau,
    getUrlbel,
    getUrlaustria,
    getUrlbrazil,
    getUrlchina,
    getUrlcolom,
    getUrlcuba,
    getUrlprague,
    getUrldenmark,
    getUrlegypt,
    getUrlethiopia,
    getUrlfinland,
    getUrlberlin,
    getUrlathens,
    getUrlbudapest,
    getUrlindia,
    getUrldublin,
    getUrlisrael,
    getUrlrome,
    getUrltokyo,
    getUrljordan,
    getUrlkuala,
    getUrlmx,
    getUrlmonaco,
    getUrlams,
    getUrllima,
    getUrllisbon,
    getUrlru,
    getUrlser,
    getUrlsin,
    getUrlbratis,
    getUrlspain,
    getUrlstock,
    getUrlzu,
    getUrlthai,
    getUrlis,
    getUrlky,
    getUrluk,
    getUrlus,
} = require("./db.js");
const compression = require("compression");
const path = require("path");
const cookieSession = require("cookie-session");
// const { sendEmail } = require("./ses.js");
csurf = require("csurf");
const multer = require("multer");
const uidSafe = require("uid-safe");
// const s3 = require("./s3");
// const { s3Url } = require("./config.json");

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

app.get("/url", (req, res) => {
    console.log(req.body);
    getUrl().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlar", (req, res) => {
    console.log(req.body);
    getUrlar().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlau", (req, res) => {
    console.log(req.body);
    getUrlau().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlbel", (req, res) => {
    console.log(req.body);
    getUrlbel().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlaustria", (req, res) => {
    console.log(req.body);
    getUrlaustria().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlbrazil", (req, res) => {
    console.log(req.body);
    getUrlbrazil().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlchina", (req, res) => {
    console.log(req.body);
    getUrlchina().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlcolom", (req, res) => {
    console.log(req.body);
    getUrlcolom().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlcuba", (req, res) => {
    console.log(req.body);
    getUrlcuba().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlprague", (req, res) => {
    console.log(req.body);
    getUrlprague().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urldenmark", (req, res) => {
    console.log(req.body);
    getUrldenmark().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlegypt", (req, res) => {
    console.log(req.body);
    getUrlegypt().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlethiopia", (req, res) => {
    console.log(req.body);
    getUrlethiopia().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlfinland", (req, res) => {
    console.log(req.body);
    getUrlfinland().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlberlin", (req, res) => {
    console.log(req.body);
    getUrlberlin().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlathens", (req, res) => {
    console.log(req.body);
    getUrlathens().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlbuda", (req, res) => {
    console.log(req.body);
    getUrlbudapest().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlfindia", (req, res) => {
    console.log(req.body);
    getUrlindia().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urldublin", (req, res) => {
    console.log(req.body);
    getUrldublin().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlfisrael", (req, res) => {
    console.log(req.body);
    getUrlisrael().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlrome", (req, res) => {
    console.log(req.body);
    getUrlrome().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urltokyo", (req, res) => {
    console.log(req.body);
    getUrltokyo().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urljordan", (req, res) => {
    console.log(req.body);
    getUrljordan().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlmx", (req, res) => {
    console.log(req.body);
    getUrlmx().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlmonaco", (req, res) => {
    console.log(req.body);
    getUrlmonaco().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlams", (req, res) => {
    console.log(req.body);
    getUrlams().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urllima", (req, res) => {
    console.log(req.body);
    getUrllima().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urllisbon", (req, res) => {
    console.log(req.body);
    getUrllisbon().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlru", (req, res) => {
    console.log(req.body);
    getUrlru().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlser", (req, res) => {
    console.log(req.body);
    getUrlser().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlsin", (req, res) => {
    console.log(req.body);
    getUrlsin().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlbratis", (req, res) => {
    console.log(req.body);
    getUrlbratis().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlstock", (req, res) => {
    console.log(req.body);
    getUrlstock().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlzu", (req, res) => {
    console.log(req.body);
    getUrlzu().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlthai", (req, res) => {
    console.log(req.body);
    getUrlthai().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlis", (req, res) => {
    console.log(req.body);
    getUrlis().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlky", (req, res) => {
    console.log(req.body);
    getUrlky().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urluk", (req, res) => {
    console.log(req.body);
    getUrluk().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
    });
});

app.get("/urlus", (req, res) => {
    console.log(req.body);
    getUrlus().then((data) => {
        console.log("urldata", data);
        res.json({ data: data[0] });
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

server.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
