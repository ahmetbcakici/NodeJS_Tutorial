var connectionstring = "mongodb+srv://ahmet:nodejs@cluster0-z1okr.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(connectionstring,{useNewUrlParser : true},function(err,db){
    if (err) throw err;
    var dbo = db.db("veritabanim");
    var yenideger = {$set:{il:"Çorum"}};
    dbo.collection("musteriler").updateMany({isim:"Veli"},yenideger,function(err){
        if (err) throw err;
        console.log("Güncellendi");
        db.close();
    });
});
