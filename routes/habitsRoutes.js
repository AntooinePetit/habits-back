const express = require("express");
const router = express.Router();

// Importer le controller
const habitsController = require("../controllers/habitsController");

// GET `/habits` : Pour récupérer toutes les habitudes
router.get("/", habitsController.getAllHabits);
// POST `/habits` : Pour créer une nouvelle habitude
router.post("/", habitsController.createHabit);
// DELETE `/habits/:id` : Pour supprimer une habitude
router.delete("/:id", habitsController.deleteHabit);

module.exports = router;
