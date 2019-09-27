const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("index sayfasındasınız");
});

app.get("/api/urunler/:id", function(req, res) {
    res.send(req.params.id);
});

app.get("/api/gonderiler/:year/:month", function(req, res) {
    // res.send(req.params);
    res.send(req.query);
});


const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Sunucu ${port} portunda çalışıyor.`);