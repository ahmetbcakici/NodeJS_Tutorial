var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	fs.readFile("page.html",function(err,data){//Dosya okuma
		res.end(data);
	});
	fs.appendFile("metin.txt","Ahmet",function(err){//Dosyaya ekleme
		if(err) throw err;
		console.log("Kaydedildi!");
	});
	fs.open("newfile.txt","w",function(err){//Dosya oluşturma
		console.log("Oluşturuldu!");
	});
	fs.writeFile("newfile.txt","Benim metnim.",function(err){//Belirtilen isimde dosya yoksa oluştur ve içeriğini "Benim metnim." yap.Öyle bir dosya varsa üzerine yaz metin içeriğini belirttiğim metinle değiştir.
		console.log("Değiştirildi!");
	});
	fs.unlink("newfile.txt",function(err){});//Dosya silme
	fs.unlink("metin.txt","yenimetin.txt",function(err){});//Dosya ismi değiştirme
	res.end();
}).listen(8080);