const express = require("express");
const {
  loginController,
  registerController,
} = require("./../controllers/userController");
const router = express.Router();

//routes
//Method - post
router.post("/login", loginController);

// //MEthod - POST
router.post("/register", registerController);

module.exports = router;
