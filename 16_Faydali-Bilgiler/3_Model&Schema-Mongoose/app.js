const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/mongoose", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (err) throw err
    console.log("Mongoose ile bağlantı başarılı!")
})


const Book = require("./models/Book")
var yeni_kitap = new Book({
    isim: "Kitap 2",
    barkod_numarası: "21Z492B"
})
yeni_kitap.save((err) => {
    if (err) throw err
    console.log("Veri başarıyla kaydedildi")
})