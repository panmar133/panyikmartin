const express = require('express')
const app = express()
var cors = require('cors')
const mysql = require('mysql')

app.use(cors())

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "fogado",
    port: 3307
  });

app.get('/', (req, res) => {
  res.send('Backend!')
})

app.get('/szobak', (req, res) => {
    const sqlParancs = "SELECT `sznev`,`agy` FROM `szobak`;"
    db.query(sqlParancs, (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    })
})

app.get('/selectSzobak', (req, res) => {
    const sqlParancs = "SELECT `szazon`, `sznev` FROM `szobak`;"
    db.query(sqlParancs, (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    })
})

app.get('/szobakfoglaltsaga', (req, res) => {
    const sqlParancs = "SELECT szobak.sznev, COUNT(vendeg) AS vendegekszama, SUM(tav-erk) AS napokszama FROM `foglalasok` INNER JOIN szobak ON szobak.szazon = foglalasok.szoba GROUP by szobak.sznev;"
    db.query(sqlParancs, (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    })
})

app.get('/szobakfoglaltsaga', (req, res) => {
    const sqlParancs = "SELECT szobak.sznev, COUNT(vendeg) AS vendegekszama, SUM(tav-erk) AS napokszama FROM `foglalasok` INNER JOIN szobak ON szobak.szazon = foglalasok.szoba GROUP by szobak.sznev;"
    db.query(sqlParancs, (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    })
})

app.get('/valszobafoglaltsag/:id', (req, res) => {
    const sqlParancs = "SELECT szobak.sznev, vendegek.vnev, erk, tav FROM `foglalasok` INNER JOIN vendegek ON vendegek.vsorsz = foglalasok.vendeg INNER JOIN szobak ON szobak.szazon = foglalasok.szoba WHERE szobak.szazon = ?;"
    db.query(sqlParancs, req.params.id, (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    })
})

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})