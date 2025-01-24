const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3307,
    password: "",
    database: "kozutak"
});

app.get("/", (req, res) => {
    res.send("Backend mükszik.");
});

app.get("/regiok:id", (req, res) => {
    const sql = "SELECT * FROM regiok WHERE regiok.Rid = ?;";
    db.query(sql, id, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.get("/regiokwhere", (req, res) => {
    const sql = "SELECT * FROM regiok WHERE regiok.Rid = 8;";
    db.query(sql, (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json(result);
    });
});

app.listen(3001, () => {
    console.log("A szerver elindult a 3001-es porton.");
});