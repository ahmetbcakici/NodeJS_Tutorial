const express = require('express');
const app = express();

app.use(express.json());

const ogrenciler = [
    { id: 1, isim: "Ahmet" },
    { id: 2, isim: "Ali" },
    { id: 3, isim: "Veli" },
    { id: 4, isim: "Ayşe" },
    { id: 5, isim: "Fatma" }
]

app.get("/api/ogrenciler", function(req, res) {
    res.send(ogrenciler);
});

app.get("/api/ogrenciler/:id", function(req, res) {
    const ogrenci = ogrenciler.find(ogrenci => ogrenci.id === parseInt(req.params.id));
    if (!ogrenci) res.status(404).send("Girdiğiniz ID'ye sahip öğrenci bulunamadı.");
    else {
        res.send(ogrenci);
    }
});

app.post("/api/ogrenciler", function(req, res) {
    const ogrenci = {
        id: ogrenciler.length + 1,
        isim: req.body.isim
    };
    ogrenciler.push(ogrenci);
    res.send(ogrenci);
});

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Sunucu ${port} portunda çalışıyor.`);