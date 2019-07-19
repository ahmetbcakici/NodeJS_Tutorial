var http = require("http");

http.createServer(function(req,res){
	/*res.writeHead(200,{"Content-Type" : "text/plain"});
	res.write("<h1>Hello World!</h1>");*/
	res.writeHead(200,{"Content-Type" : "text/html"});
	res.write(req.url);
	if(req.url == "/homepage")
		res.write("Ana Sayfa");
	else if(req.url == "/login")
		res.write("Giriş Sayfası");
	res.end();
}).listen(8080);

