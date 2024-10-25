const mongoose = require("mongoose");

//Create Collection Schema
const ulasanSchema = new mongoose.Schema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ulasan',
        require:true
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ulasan',
        require:true
    },
    rating: {
        type : Number,
    },
    komentar: {
        type: String,
    },
    tanggal_ulasan: {
        type: Date,
    }
});




const ulasan = mongoose.model("Ulasan", ulasanSchema);
module.exports = ulasan;