const mongoose = require("mongoose");

//Create Collection Schema
const kategoriSchema = new mongoose.Schema({
    nama_kategori: {
        type : String,
    },
    deksprisi: {
        type: String,
    },
    created_at: {
        type : Date,
    },
    updated_at: {
        type: Date,
    },
    status: {
        type: Boolean,
    }
});




const Kategori = mongoose.model("Kategori", KategoriSchema);
module.exports = Kategori;