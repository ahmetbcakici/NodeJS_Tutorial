const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    // res.send("ana sayfadasınız")
    res.sendFile(__dirname + "/index.html")
})

app.get("/hakkimda", (req, res) => {
    res.sendFile(__dirname + "/hakkimda.html")
})

app.get("/profil/:isim", (req, res) => {
    // res.send(`${req.params.isim} kişisinin profilini görüntülüyorsunuz`)
    var kullanici = { yas: 30, is: 'muhasebeci', yabanci_diller: ["Almanca", "Fransızca", "İngilizce"], admin: false }
    res.render('profil', { kisi: req.params.isim, veri: kullanici })
})

app.listen(3000)