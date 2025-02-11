const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

app.listen(3001, () =>
{
    console.log("A Backend szerver a 3001-es porton fut.");
}
);

app.get("/", (req, res) =>
{
    res.send("Szia");
})