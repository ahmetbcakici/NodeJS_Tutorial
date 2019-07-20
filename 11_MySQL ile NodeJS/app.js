var mysql = require("mysql");

var baglanti = mysql.createConnection({//Bağlantı bilgilerini tanımlama
    host:"localhost",
    user:"root",
    pass:"",
    database:"nodejsileveritabanim"
});

baglanti.connect(function(err){//Bağlantıyı başlatma 
    if(err) throw err;//Bağlantı esnasında hata kontrolü
    /*Bağlantı başarılıysa yapılacaklar*/
    console.log("Bağlantı başarılı!");
    var dbolustur = "CREATE DATABASE denemeveritabani";//Veritabanı oluşturma
    baglanti.query(dbolustur,function(err){//Sorguyu çalıştırma
    	if(err) throw err;
    	console.log("Veritabanı oluşturuldu!");
    });

    var tableolustur = "CREATE TABLE ogrenciler (id INT AUTO_INCREMENT PRIMARY KEY,isim VARCHAR(30),il VARCHAR(75))";//Tablo oluşturma
    baglanti.query(tableolustur,function(err){
    	if(err) throw err;//Sorgu esnasında hata kontrolü
    	console.log("Tablo oluşturuldu!");
    })

    var sutunekle = "ALTER TABLE ogrenciler ADD COLUMN tcno CHAR(11)";//Tabloya sütun ekleme
    baglanti.query(sutunekle,function(err){
    	if(err) throw err;
    	console.log("Sütun oluşturuldu!");
    })

    var veriekle = "INSERT INTO ogrenciler (isim,il) values ('Ahmet','Istanbul')";//Tabloya veri ekleme
    baglanti.query(veriekle,function(err){
    	if(err) throw err;
    	console.log("Veri eklendi!");
    })
    
    var cokluveriekle = "INSERT INTO ogrenciler (isim,il) values ?";//Tabloya çoklu veri ekleme
    var veriler = [//Eklenecek verilerin hazırlanması
        ["Ali","Bursa"],
        ["Mustafa","Tekirdag"],
        ["Hasan","Zonguldak"],
        ["Can","Ankara"]
    ];
    baglanti.query(cokluveriekle,[veriler],function(err){//Sorguyu çalıştırma
    	if(err) throw err;
    	console.log("Veriler eklendi!");
    })

    baglanti.query("SELECT * FROM ogrenciler",function(err,sonuc,alanlar){//Öğrenciler tablosundaki verileri çekme
    	console.log(sonuc);
    	console.log(sonuc[3].il);
    	console.log(alanlar);
    	console.log(alanlar[2].name);
    });

    baglanti.query("SELECT * FROM ogrenciler WHERE id > 3",function(err,sonuc){//ID'si 3'ten büyük olan öğrencileri çekme
    	console.log(sonuc);
    });

    var aranilan_isim = "Oguzhan";
    var aranilan_il = "Antalya";
    var verigetir = "SELECT * FROM ogrenciler WHERE isim = ? AND il = ?";
    baglanti.query(verigetir,[aranilan_isim,aranilan_il],function(err,sonuc){
    	console.log(sonuc);
    });

    var verisil = "DELETE FROM ogrenciler WHERE id > 5";//Tablodan veri silmek için sorgu
    baglanti.query(verisil,function(err){});

    var siraliverigetir = "SELECT * FROM ogrenciler ORDER BY isim";//Tablodan "isim" bilgisine göre alfabeye göre sıralı olarak verileri getirme
    baglanti.query(siraliverigetir,function(err,sonuc){console.log(sonuc);});

    var veriguncelle = "UPDATE ogrenciler SET il = 'Erzurum' WHERE id = 4";//Tablodan veri güncelleme
    baglanti.query(veriguncelle,function(err){});

    var sinirliverigetir = "SELECT * FROM ogrenciler LIMIT 3 OFFSET 2";//2. satırdan başlayarak 3 veri getirme
    baglanti.query(sinirliverigetir,function(err,sonuc){console.log(sonuc);});	
});