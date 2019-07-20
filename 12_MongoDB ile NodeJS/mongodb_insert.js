//"mongodb+srv://ahmet:nodejs@cluster0-reyox.mongodb.net/test?retryWrites=true&w=majority";
var connectionstring = "mongodb+srv://ahmet:nodejs@cluster0-reyox.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
    if (err) throw err;
    var dbo = db.db("veritabanim");
    var veri = {isim : "Oguzhan" , il : "Bursa"};
    dbo.collection("musteriler").insertOne(veri , function(err){
        if (err) throw err;
        console.log("Veri eklendi!");
        db.close();
    })

    var cokluveri = [
        {isim : "Veli" , il : "Istanbul"},
        {isim : "Ahmet" , il : "Ankara"},
        {isim : "Mehmet" , il : "Trabzon"}
    ];
    dbo.collection("musteriler").insertMany(cokluveri , function(err){
        if (err) throw err;
        console.log("Veriler eklendi!");
        db.close();
    })
});
