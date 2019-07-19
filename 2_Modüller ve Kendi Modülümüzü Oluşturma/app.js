var http = require("http");
var tarih = require("./mymodule");

http.createServer(function(req,res){
	res.end("Anlık tarih - saat:"+tarih.myDateTime());	
}).listen(8080);