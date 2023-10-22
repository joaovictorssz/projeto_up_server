const mongoose = require("mongoose")

mongoose.connect('mongodb://0.0.0.0:27017/projeto_up')

const db = mongoose.connection
db.on("error", ()=>console.error.bind(console, 'Erro na conexão com o MongoDB'))

db.once('open', ()=>{
    console.log('Conectado ao MongoDB')
})

module.exports = db;