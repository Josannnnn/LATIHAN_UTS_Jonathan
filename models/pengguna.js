const mongoose = require("mongoose");

//Create Collection Schema
const penggunaSchema = new mongoose.Schema({
    nama: {
        type : String,
    },
    email: {
        type: String,
    },
    password: {
        type : String,
    },
    alamat: {
        type: String,
    },
    tanggal_daftar: {
        type: Date,
    }
});




const pengguna = mongoose.model("Pengguna", penggunaSchema);
module.exports = pengguna;