var http = require("http");
var modulum = require("./modulum");

http.createServer(function(req,res){
    res.end("Anlik tarih bilgisi : "+modulum.anliktarih());
}).listen(8090);