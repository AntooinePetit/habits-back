const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");

// Importer la connexion MongoDB
require("./db");

// Middleware pour parser le JSON
app.use(express.json());

// CORS
app.use(cors());

// Intégrer les routes
const habitsRoutes = require("./routes/habitsRoutes");
const entriesRoutes = require("./routes/entriesRoutes");

// app.use("/api/v1/habits", habitsRoutes);
// app.use("/api/v1/entries", entriesRoutes);

app.get("/", (req, res) => {
  res.send("Il n'y a rien à voir ici");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur : http://localhost:${port}`);
});
