// controllers/tableController.js

const Reserv = require("../models/reservationModel");

exports.createTable = async (req, res) => {
  try {
    const { tableName, capacity } = req.body;
    const table = new Reserv({ tableName, capacity });
    await table.save();
    res.json({ message: "Table created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllTables = async (req, res) => {
  try {
    const tables = await Reserv.find();
    res.json(tables);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
