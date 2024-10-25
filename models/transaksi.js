const mongoose = require("mongoose");

//Create Collection Schema
const transaksiSchema = new mongoose.Schema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaksi',
        require: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaksi',
        require:true
    },
    jumlah: {
        type : Number,
    },
    total_harga: {
        type: Number,
    },
    tanggal_transaksi: {
        type: Date,
    }
});




const transaksi = mongoose.model("Transaksi", transaksiSchema);
module.exports = transaksi;