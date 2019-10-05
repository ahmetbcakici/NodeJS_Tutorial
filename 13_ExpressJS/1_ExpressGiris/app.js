// const http = require("http");

// http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.write("hello world");
//         res.end();
//     }

//     if (req.url === "/api/urunler") {
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// }).listen(8090);

const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.get('/api/urunler', function(req, res) {
    res.send(JSON.stringify([1, 2, 3]));
})

app.listen(3000);