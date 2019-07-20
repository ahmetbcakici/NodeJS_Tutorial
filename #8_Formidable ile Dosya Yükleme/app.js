var formidable = require("formidable");//Formidable modülünü kurduktan sonra projeye dahil etme
var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    if (req.url == "/dosyayukleme"){
        var form = new formidable.IncomingForm();//Gelen formu alma
        form.parse(req,function(err,fields,files){
            var yuklenendosyayolu = files.yuklenendosya.path;//Yüklenecek dosya yolu belirtiliyor
            var nereyeyuklenecek = 'C:/Users/Ahmet Bugra Cakici/Desktop/'+files.yuklenendosya.name;//Nereye aktarılacağı belirtiliyor
            fs.rename(yuklenendosyayolu,nereyeyuklenecek,function(err){//İşlem gerçekleşiyor
                if (err) throw err;
                res.write("Dosya yüklendi ve taşındı!");
                res.end();
            });
        });
    }
    else{
		/*Dosya yüklenmesi için gerekli form oluşturulması*/
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<form action = 'dosyayukleme' method='post' enctype='multipart/form-data'>");
    res.write("<input type='file' name='yuklenendosya'><br>");
    res.write("<input type='submit'>");
    res.write("</form>");
    return res.end();
    }
}).listen(8080);