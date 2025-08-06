const Bug = require('../models/Bug');

exports.createBug = async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

exports.updateBugStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const bug = await Bug.findByIdAndUpdate(id, { status }, { new: true });
  res.json(bug);
};
