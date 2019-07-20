/*Gerekli modüllerin projeye dahil edilmesi*/
var http = require("http");

http.createServer(function(req,res/*İstek - Cevap parametreleri*/){//Yerel sunucu oluşturma
	res.end("Hello World!");//Cevap işlemi bitirirken ekrana Hello World bastırma
}).listen(7000);//Port belirleme