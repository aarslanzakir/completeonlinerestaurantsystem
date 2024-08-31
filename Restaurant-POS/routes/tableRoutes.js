const express = require("express");
const {
  getTableController,
  addTableController,
  editTableController,
  deleteTableController,
} = require("../controllers/tableController");
const router = express.Router();

//routes
//Method - get
router.get("/get-table", getTableController);

// //MEthod - POST
router.post("/add-table", addTableController);

//method - PUT
router.put("/edit-table", editTableController);
//method - DELETE
router.post("/delete-table", deleteTableController);

module.exports = router;
