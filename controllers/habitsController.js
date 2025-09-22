const Habit = require("../models/habitsModel");

exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOneHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) res.status(404).json({ message: "Habitude introuvable" });
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createHabit = async (req, res) => {
  try {
    const { name } = req.body;
    const habit = new Habit({ name });
    await habit.save();
    res.status(201).json({ habit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) res.status(404).json({ message: "Habitude introuvable" });
    await habit.deleteOne();
    res.status(200).json({ message: `Suppression de ${habit.name} réussie` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
