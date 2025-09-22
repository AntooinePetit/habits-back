const express = require("express");
const router = express.Router();

// Importer le controller
const entriesController = require("../controllers/entriesController");

// GET `/entries` : Pour récupérer toutes les entrées
router.get("/", entriesController.getAllEntries);
// GET `/entries/:date` : Pour récupérer les entrées d'une journée précise
router.get("/date/:date", entriesController.getAllEntriesFromOneDay);
// GET `/entries/:id` : Pour récupérer les entrées d'une habitude
router.get('/id/:id', entriesController.getAllEntriesFromOneHabit)
// POST `/entries/:id` : Pour Créer une nouvelle entrée d'une habitude
router.post("/:id", entriesController.createEntry);
// DELETE `/entries/:id` : Pour supprimer une entrée
router.delete('/:id', entriesController.deleteEntry)

module.exports = router;
