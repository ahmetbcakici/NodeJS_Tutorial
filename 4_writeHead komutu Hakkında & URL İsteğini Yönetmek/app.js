var http = require("http");

http.createServer(function(req,res){
	/*res.writeHead(200,{"Content-Type" : "text/plain"});
	res.write("<h1>Hello World!</h1>");*/
	res.writeHead(200/*200 hata yok anlamına,404 ise hata olduğu anlamına gelir.*/,{"Content-Type" : "text/html"});//İçerik türünü belirtme
	res.write(req.url);//İstek olarak gelen adresi ekrana bastırma
	if(req.url == "/homepage")//İstek olarak gelen adresin kontrolü
		res.write("Ana Sayfa");
	else if(req.url == "/login")
		res.write("Giriş Sayfası");//İstek olarak gelen adresin kontrolü
	res.end();
}).listen(8080);

