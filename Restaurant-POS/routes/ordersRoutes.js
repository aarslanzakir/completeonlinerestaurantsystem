const express = require("express");
const {
  addOrdersController,
  getOrdersController,
} = require("./../controllers/ordersController");

const router = express.Router();

//routes

//MEthod - POST
router.post("/add-orders", addOrdersController);

//MEthod - GET
router.get("/get-orders", getOrdersController);

module.exports = router;
