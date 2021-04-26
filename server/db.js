const spicedPg = require("spiced-pg");

// const db = spicedPg("postgres:postgres:postgres@localhost:5432/socialnetwork");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/socialnetwork"
);

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
