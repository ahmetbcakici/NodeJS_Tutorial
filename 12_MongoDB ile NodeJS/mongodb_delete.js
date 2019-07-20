//"mongodb+srv://ahmet:nodejs@cluster0-reyox.mongodb.net/test?retryWrites=true&w=majority";
var connectionstring = "mongodb+srv://ahmet:nodejs@cluster0-reyox.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
    if (err) throw err;
    var dbo = db.db("veritabanim");
    dbo.collection("musteriler").deleteMany({},function(err){
        if (err) throw err;
        console.log("SİLİNDİ");
        db.close();
    });
});
