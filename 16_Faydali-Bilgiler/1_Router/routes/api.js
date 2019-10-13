const express = require("express")
const router = express.Router()

router.get("/kitaplar", (req, res) => {
    res.send("kitaplar")
})

module.exports = router