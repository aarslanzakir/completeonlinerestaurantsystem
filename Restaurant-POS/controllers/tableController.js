const tableModel = require("../models/tableModel");
//get items
const getTableController = async (req, res) => {
  try {
    const tables = await tableModel.find();
    res.status(200).send(tables);
  } catch (error) {
    console.log(error);
  }
};
//add items
const addTableController = async (req, res) => {
  try {
    const newTable = new tableModel(req.body);
    await newTable.save();
    res.status(201).send("Table Created Successfully!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};
// update item
const editTableController = async (req, res) => {
  try {
    const { tableId } = req.body;
    console.log(tableId);
    await tableModel.findOneAndUpdate({ _id: tableId }, req.body, {
      new: true,
    });

    res.status(201).json("Table Updated");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
// Delete item
const deleteTableController = async (req, res) => {
  try {
    const { tableId } = req.body;
    await tableModel.findOneAndDelete({ _id: tableId });

    res.status(200).json("Table Updated");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  getTableController,
  addTableController,
  editTableController,
  deleteTableController,
};
