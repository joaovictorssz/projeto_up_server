const mongoose = require("mongoose")

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on("error", () => console.error.bind(console, "Erro na conexão com o MongoDB"));
  
  db.once("open", () => {
    console.log("Conectado ao MongoDB");
  });
  
  module.exports = db;