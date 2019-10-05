//kullanılacak modüllerin dahil edilmesi
const express = require("express")
const mysql = require("mysql")
const axios = require("axios")
const PORT = process.env.PORT || 3000;

const app = express();

const con = mysql.createConnection({ //bağlantı ayarları
    host: "localhost",
    user: "root",
    password: "",
    database: "turktakvim_api"
})
con.connect()

app.get("/api/iller", (req, res) => {
    con.query("SELECT * FROM iller", (err, result, fields) => {
        if (err) return err;
        return res.status(200).send(result)
    })
})

app.get("/api/ilceler/:il", (req, res) => {
    con.query(`SELECT * FROM ilceler WHERE il = ${con.escape(req.params.il)}`, (err, result, fields) => {
        if (err) return err;
        return res.status(200).send(result)
    })
})

app.get("/api/namazvakti/:id", (req, res) => {
    axios.get("http://www.turktakvim.com/XMLservis.php?tip=vakit&cityID=16741&tarih=2019-06-10&format=json")
        .then((response) => {
            return res.status(200).json(response.data.cityinfo.vakit)
        })
        .catch((error) => {
            console.log(`Error : ${error}`)
        })
})


app.listen(PORT, () => `Sunucu ${PORT} portunda çalışmaktadır!`)