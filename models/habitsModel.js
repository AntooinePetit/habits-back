const mongoose = require("mongoose");

// Habitude (id, nom)
const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Habit", habitSchema);
