const mongoose = require('mongoose');

const ConteudoSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    idioma: {
        type: String,
        required: true
    },
    imdb: {
        type: Number,
        required: true
    },
    fechaCriacao: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Conteudo', ConteudoSchema);