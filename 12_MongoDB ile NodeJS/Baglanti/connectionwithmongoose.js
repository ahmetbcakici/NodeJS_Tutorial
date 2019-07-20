const mongoose = require("mongoose");
const baglantimetni = "mongodb+srv://ahmet:nodejs@cluster0-reyox.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(baglantimetni,{useNewUrlParser:true},function(err){
    if(err) throw err;
    console.log("Bağlantı başarılı");
});