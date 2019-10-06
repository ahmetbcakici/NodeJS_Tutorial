const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/assets", express.static("assets"))

app.get("/", (req, res) => {
    // res.send("ana sayfadasınız")
    res.render('index')
})

app.get("/hakkimda", (req, res) => {
    res.render('hakkimda')
})

app.get("/iletisim", (req, res) => {
    res.render('iletisim')
})

app.post("/iletisim", (req, res) => {
    console.log(req.body.isim)
    console.log(req.body.mail)
    console.log(req.body.mesaj)
    res.end();
})

app.get("/profil/:isim", (req, res) => {
    // res.send(`${req.params.isim} kişisinin profilini görüntülüyorsunuz`)
    var kullanici = { yas: 30, is: 'muhasebeci', yabanci_diller: ["Almanca", "Fransızca", "İngilizce"], admin: false }
    res.render('profil', { kisi: req.params.isim, veri: kullanici })
})

app.listen(3000)