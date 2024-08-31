const ordersModel = require("../models/ordersModel");

// Add items
const addOrdersController = async (req, res) => {
  try {
    const billData = req.body;

    // Adding tableName to the billData
    const newBill = new ordersModel({ ...billData });
    // Saving the new bill
    await newBill.save();

    res.send("Order Created Successfully!");
  } catch (error) {
    res.send("Something went wrong");
    console.error(error);
  }
};

// Get items
const getOrdersController = async (req, res) => {
  try {
    const bills = await ordersModel.find();
    res.send(bills);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addOrdersController,
  getOrdersController,
};
