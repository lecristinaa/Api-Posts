const mongoose = require('mongoose')
mongoose.set('strictQuery', true) // seta uma Query de forma estrita

// conecta com o MongoAtlas
// MongoAtlas permite deixar o banco online
async function main(){
    await mongoose.connect('mongodb+srv://lecristina:<lesalomao>@cluster0.xgic0hk.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conectado ao MongoDB')
}

// executa o main() e caso der erro exibe no console
main().catch((err) => console.log(err))

// exporta o módulo para ser usado em outro arquivo
module.exports = main