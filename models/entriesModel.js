const mongoose = require("mongoose");

// Entrée (id, habitude_id, date)
const entrySchema = new mongoose.Schema({
  habit_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Entry", entrySchema);
