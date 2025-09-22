const express = require("express");
const router = express.Router();

// Importer le controller
const entriesController = require("../controllers/entriesController");

// GET     `/entries`            : Pour récupérer toutes les entrées
// router.get("/" /* Controller */);
// // GET     `/entries/:date`      : Pour récupérer les entrées d'une journée précise
// router.get("/:date" /* Controller */);
// // GET     `/entries/:date/:id`  : Pour récupérer les entrées d'une journée précise et d'une habitude précise
// router.get("/:date/:id" /* Controller */);
// // POST    `/entries/:id`        : Pour Créer une nouvelle entrée d'une habitude
// router.post("/:id" /* Controller */);

module.exports = router;
