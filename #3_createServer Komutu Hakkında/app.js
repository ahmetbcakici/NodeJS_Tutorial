var http = require("http");

http.createServer(function(req,res)){
	res.write("Hello World!");//Cevap olarak yazı gönderme işlemleri
	res.write("This is my page!");
	res.end();
}).listen(8080);