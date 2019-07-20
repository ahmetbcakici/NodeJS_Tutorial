var http = require("http");
var url = require("url");//URL modülünü projeye dahil etme

http.createServer(function(req,res){
	console.log(req.url);
	var q = url.parse(req.url,true).query;//URL parçalama ve parametrelerine erişecek hale getirme
	var txt = "Ad:"+q.name+" Soyad:"+q.lastname+" Ülke"+q.country;//URL ile gönderilen parametrele erişme
	res.end(txt);
}).listen(8080);