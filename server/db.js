const spicedPg = require("spiced-pg");

const db = spicedPg("postgres:postgres:postgres@localhost:5432/socialnetwork");

module.exports.signUp = function (first, last, email, saltedPass) {
    const query = `INSERT INTO users (first, last, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
    const params = [first, last, email, saltedPass];
    return db.query(query, params);
};

module.exports.getUser = function (email) {
    const query = `SELECT password, id FROM users WHERE email = $1;`;
    const params = [email];
    return db.query(query, params);
};

module.exports.getCode = function (email, code) {
    const query =
        "INSERT INTO code (email, code) VALUES ($1, $2) RETURNING created_at;";
    const params = [email, code];
    return db.query(query, params);
};

module.exports.getCode2 = function (email) {
    const query =
        "SELECT * FROM code WHERE CURRENT_TIMESTAMP - created_at < INTERVAL '10 minutes' AND email = $1;";
    const params = [email];
    return db.query(query, params);
};

module.exports.newPass = function (password, email) {
    const query = "UPDATE users SET password = $1 WHERE email = $2;";
    const params = [password, email];
    return db.query(query, params);
};

module.exports.userInfo = function (id) {
    const query = "SELECT first, last, profilepic, bio FROM users WHERE id=$1;";
    const params = [id];
    return db.query(query, params);
};

module.exports.insertPic = function (img, id) {
    const query =
        "UPDATE users SET profilepic = $1 WHERE id = $2 RETURNING id, profilepic;";
    const params = [img, id];
    return db.query(query, params);
};

module.exports.updateBio = function (bio, id) {
    const query = "UPDATE users SET bio = $1 WHERE id = $2 RETURNING id, bio;";
    const params = [bio, id];
    return db.query(query, params);
};

module.exports.getUserInfo = function (id) {
    const query = "SELECT * FROM users WHERE id = $1;";
    const params = [id];
    return db.query(query, params);
};

module.exports.lastThreeUsers = function () {
    const query = "SELECT * FROM users ORDER BY id DESC LIMIT 3;";
    return db.query(query);
};

module.exports.searchUsers = function (val) {
    const query =
        "SELECT first, profilepic, id FROM users WHERE first ILIKE $1;";
    const params = [val + "%"];
    return db.query(query, params);
};

module.exports.areWeFriends = function (recipientUser, senderUser) {
    const query =
        "SELECT * FROM friendships WHERE (recipient_id = $1 AND sender_id = $2) OR (recipient_id = $2 AND sender_id = $1);";
    const params = [recipientUser, senderUser];
    return db.query(query, params).then(({ rows }) => {
        return rows;
    });
};

module.exports.letsBeFriends = function (recipientUser, senderUser) {
    const query =
        "INSERT INTO friendships (recipient_id, sender_id) VALUES ($1, $2) RETURNING sender_id;";
    const params = [recipientUser, senderUser];
    return db.query(query, params);
};

module.exports.acceptFriendship = function (recipientUser) {
    const query =
        "UPDATE friendships SET accepted = true WHERE recipient_id = $1 RETURNING accepted";
    const params = [recipientUser];
    return db.query(query, params);
};

module.exports.deleteRequest = function (recipientUser, senderUser) {
    const query =
        "DELETE FROM friendships WHERE (recipient_id = $1 AND sender_id = $2) OR (recipient_id = $2 AND sender_id = $1) RETURNING sender_id;";
    const params = [recipientUser, senderUser];
    return db.query(query, params);
};

module.exports.getWannabeFriends = function (id) {
    const query =
        "SELECT users.id, first, last, profilepic, accepted FROM friendships JOIN users ON (accepted = false AND recipient_id = $1 AND sender_id = users.id) OR (accepted = true AND recipient_id = $1 AND sender_id = users.id) OR (accepted = true AND sender_id = $1 AND recipient_id = users.id);";
    const params = [id];
    return db.query(query, params);
};

module.exports.okToBeFriends = function (sender, recipient) {
    const query =
        "UPDATE friendships SET accepted = true WHERE sender_id = $1 AND recipient_id = $2 RETURNING sender_id;";
    const params = [sender, recipient];
    return db.query(query, params);
};

module.exports.letsUnfriend = function (recipientUser, senderUser) {
    const query =
        "DELETE FROM friendships WHERE (recipient_id = $1 AND sender_id = $2) OR (recipient_id = $2 AND sender_id = $1) RETURNING sender_id;";
    const params = [recipientUser, senderUser];
    return db.query(query, params);
};

module.exports.getChat = function () {
    const query =
        "SELECT messages.id, messages.sender_id, messages.message, first, last FROM users JOIN messages ON (messages.sender_id = users.id) ORDER BY messages.id DESC LIMIT 10;";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.insertChatMessage = function (senderId, message) {
    const query =
        "WITH inserted AS (INSERT INTO messages (sender_id, message) VALUES ($1, $2) RETURNING id, sender_id, message) SELECT inserted.*, users.first, users.last, users.profilepic FROM inserted INNER JOIN users ON inserted.sender_id = users.id;";
    const params = [senderId, message];
    return db.query(query, params).then(({ rows }) => {
        return rows[0];
    });
};

module.exports.getUrl = function () {
    const query = "SELECT * FROM URL";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlar = function () {
    const query = "SELECT * FROM urlar";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlau = function () {
    const query = "SELECT * FROM urlau";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlbel = function () {
    const query = "SELECT * FROM urlbel";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlaustria = function () {
    const query = "SELECT * FROM urlaustria";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlbrazil = function () {
    const query = "SELECT * FROM urlbrazil";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlchina = function () {
    const query = "SELECT * FROM urlchina";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlcolom = function () {
    const query = "SELECT * FROM urlcolom";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlcuba = function () {
    const query = "SELECT * FROM urlcuba";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlprague = function () {
    const query = "SELECT * FROM urlprague";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrldenmark = function () {
    const query = "SELECT * FROM urldenmark";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlegypt = function () {
    const query = "SELECT * FROM urlegypt";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlethiopia = function () {
    const query = "SELECT * FROM urlethiopia";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlfinland = function () {
    const query = "SELECT * FROM urlfinland";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlberlin = function () {
    const query = "SELECT * FROM urlberlin";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlathens = function () {
    const query = "SELECT * FROM urlathens";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlbudapest = function () {
    const query = "SELECT * FROM urlbudapest";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlindia = function () {
    const query = "SELECT * FROM urlindia";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrldublin = function () {
    const query = "SELECT * FROM urldublin";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlisrael = function () {
    const query = "SELECT * FROM urlisrael";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlrome = function () {
    const query = "SELECT * FROM urlrome";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrltokyo = function () {
    const query = "SELECT * FROM urltokyo";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrljordan = function () {
    const query = "SELECT * FROM urljordan";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlkuala = function () {
    const query = "SELECT * FROM urlkuala";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlmx = function () {
    const query = "SELECT * FROM urlmx";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlmonaco = function () {
    const query = "SELECT * FROM urlmonaco";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlams = function () {
    const query = "SELECT * FROM urlams";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrllima = function () {
    const query = "SELECT * FROM urllima";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrllisbon = function () {
    const query = "SELECT * FROM urllisbon";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlru = function () {
    const query = "SELECT * FROM urlurlru";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlser = function () {
    const query = "SELECT * FROM urlser";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlsin = function () {
    const query = "SELECT * FROM urlsin";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlbratis = function () {
    const query = "SELECT * FROM urlbratis";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlspain = function () {
    const query = "SELECT * FROM urlspain";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlstock = function () {
    const query = "SELECT * FROM urlstock";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlzu = function () {
    const query = "SELECT * FROM urlzu";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlthai = function () {
    const query = "SELECT * FROM urlthai";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlis = function () {
    const query = "SELECT * FROM urlis";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlky = function () {
    const query = "SELECT * FROM urlky";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrluk = function () {
    const query = "SELECT * FROM urluk";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};

module.exports.getUrlus = function () {
    const query = "SELECT * FROM urlus";
    return db.query(query).then(({ rows }) => {
        return rows;
    });
};
