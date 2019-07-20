var http = require("http");
var tarih = require("./mymodule");//Aynı dizindeki modülümü tarih isimli değişkene tanımlıyorum.

http.createServer(function(req,res){
	res.end("Anlık tarih - saat:"+tarih.myDateTime());//Modülümün yukarıda tanımladığım ismiyle özelliğine erişme
}).listen(8080);