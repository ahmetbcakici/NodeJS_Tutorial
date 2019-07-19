var http = require("http");

http.createServer(function(req,res){
	res.write("Hello World!");
	res.write("This is my page!");
	res.end();
}).listen(8080);