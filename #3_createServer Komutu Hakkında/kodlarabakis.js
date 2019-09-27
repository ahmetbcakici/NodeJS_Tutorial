const http = require("http");

http.createServer(function(istek,cevap){
    if(istek.url == "/giris") cevap.write("Giris sayfasindasiniz!");
    cevap.end();
}).listen(8080);