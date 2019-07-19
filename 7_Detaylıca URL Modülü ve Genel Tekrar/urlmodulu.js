var url = require("url");
var adr = "http://localhost:8080/default.html?year=2017&month=Şubat";
var q = url.parse(adr,true);

/*if(q.pathname == "/login") console.log("Giriş sayfasına hoşgeldiniz!");*/

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log("-----");
var qdata = q.query;
console.log("Yıl = "+qdata.year+" Ay = "+qdata.month+" Gün = "+qdata.day);