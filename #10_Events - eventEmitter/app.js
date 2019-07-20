/*Gerekli modüllerin projeye dahil edilmesi*/
var events = require('events');
var eventEmitter = new events.EventEmitter();


var yazdirma = function(){
    console.log("Benim olayım");
}
//"Yazdırma" fonksiyonunu "yazdır" ismiyle event olarak tanımladım.
eventEmitter.on("yazdir",yazdirma);

//"Yazdır" isimli event ı tetikledim(çalıştırdım)
eventEmitter.emit("yazdir");