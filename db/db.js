const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection
db.on("error", ()=>console.error.bind(console, 'Erro na conexão com o MongoDB'))

db.once('open', ()=>{
    console.log('Conectado ao MongoDB')
})

module.exports = db;