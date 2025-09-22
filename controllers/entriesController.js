const Entry = require("../models/entriesModel");
const Habit = require("../models/habitsModel");

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllEntriesFromOneDay = async (req, res) => {
  try {
    const date = req.params.date.split("-");
    const start = new Date(
      Number(date[0]),
      Number(date[1]) - 1,
      Number(date[2])
    );
    const end = new Date(
      Number(date[0]),
      Number(date[1]) - 1,
      Number(date[2]) + 1
    );
    const entries = await Entry.find({
      date: {
        $gte: start,
        $lt: end,
      },
    });
    if (entries.length == 0)
      res
        .status(404)
        .json({ message: "Aucune entrée trouvée pour cette date" });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllEntriesFromOneHabit = async (req, res) => {
  try {
    const entries = await Entry.find({ habit_id: req.params.id });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEntry = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) res.status(404).json({ message: "Habitude introuvable" });
    const entry = new Entry({ habit_id: habit._id });
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) res.status(404).json({ message: "Entrée introuvable" });
    await entry.deleteOne();
    res.status(200).json({ message: "Entrée supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
