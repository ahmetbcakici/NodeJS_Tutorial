const express = require("express")
    // const routes = require("./routes/api")
const app = express()
app.use("/api", require("./routes/api"))

app.listen(3000)
console.log("server çalışıyor")