const mongoose = require("mongoose");

const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI)
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.log(`Erreur de connexion : ${err}`));

module.exports = mongoose.connection