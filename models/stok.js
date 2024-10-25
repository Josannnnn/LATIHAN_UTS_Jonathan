const mongoose = require("mongoose");

//Create Collection Schema
const stokSchema = new mongoose.Schema({
    produk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stok',
        require: true,
    },
    jumlah: {
        type: Number,

    },
    tanggal_update: {
        type : Date,
    },
    keterangan: {
        type: String,
    },
    lokasi: {
        type: String,
    }
});




const stok = mongoose.model('Stok', stokSchema);
module.exports = stok;