const mongoose = require("mongoose");

//Create Collection Schema
const pesanan = new mongoose.Schema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pesanan',
        require: true,
    },
    pengguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pesanan',
        require:true
    },
    jumlah: {
        type : Number,
    },
    status: {
        type: String,
    },
    tanggal_pesanan: {
        type: Date,
    }
});




const pesanan = mongoose.model('Pesanan', pesananSchema);
module.exports = pesanan;