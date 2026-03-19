const mongoose = require("mongoose");

const paisSchema = mongoose.Schema({
    idPais: {
        type: Number,
        required: true,
        unique: true
    },
    nombrePais: {
        type: String,
        required: true
    },
    continente: {
        type: String,
        required: true
    },
    poblacion: {
        type: Number,
        required: true
    },
    idiomas: {
        type: [String], // arreglo de idiomas
        required: true
    }
});

module.exports = mongoose.model("Paises", paisSchema);