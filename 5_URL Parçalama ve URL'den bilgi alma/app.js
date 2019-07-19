var http = require("http");
var url = require("url");

http.createServer(function(req,res){
	console.log(req.url);
	var q = url.parse(req.url,true).query;
	var txt = "Ad:"+q.name+" Soyad:"+q.lastname+" Ülke"+q.country;
	res.end(txt);
}).listen(8080);