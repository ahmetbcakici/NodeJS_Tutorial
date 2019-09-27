const express = require('express');
const app = express();

const ogrenciler = [
    { id: 1, isim: "Ahmet" },
    { id: 2, isim: "Ali" },
    { id: 3, isim: "Veli" },
    { id: 4, isim: "Ayşe" },
    { id: 5, isim: "Fatma" }
]


app.get("/", function(req, res) {
    res.send("index sayfasındasınız");
});

app.get("/ogrenciler", function(req, res) {
    res.send(ogrenciler);
});

app.get("/ogrenciler/:id", function(req, res) {
    const ogrenci = ogrenciler.find(ogrenci => ogrenci.id === parseInt(req.params.id));
    if (!ogrenci) res.status(404).send("Girdiğiniz ID'ye sahip öğrenci bulunamadı.");
    else {
        res.send(ogrenci);
    }
});


const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Sunucu ${port} portunda çalışıyor.`);