const mongoose = require('mongoose')

// definindo o esquema dos posts
// schema é o "create table"
// 4 campos: titulo, mensagem, tipo da mensagem e autor
// definindo o "schema"
const postsSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    msg: {type: String, require: true},
    tipo_msg: {type: Number, require: true},
    autor: {type: String, require: false}
})

// exporta o módulo para ser usado em outro arquivo
module.exports = mongoose.model('Posts', postsSchema)