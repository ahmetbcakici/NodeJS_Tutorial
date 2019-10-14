const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BookSchema = new Schema({
    isim: {
        type: String,
        required: true
    },
    eklenme_tarihi: {
        type: Date,
        default: Date.now
    },
    barkod_numarası: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('book', BookSchema)