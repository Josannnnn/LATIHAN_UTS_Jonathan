const mongoose = require("mongoose");

//Create Collection Schema
const produkSchema = new mongoose.Schema({
    nama: {
        type : String,
    },
    deksprisi: {
        type: String,
    },
    harga: {
        type : number,
    },
    stok: {
        type: Number,
    },
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Kategori',
        require: true,
    }
});




const Produk = mongoose.model("Produk", produkSchema);
module.exports = Produk;

