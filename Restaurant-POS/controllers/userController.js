// userController.js

const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// Login controller
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.findOne({ userId });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If credentials are correct, send user data
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Registration controller
const registerController = async (req, res) => {
  try {
    const { name, userId, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ userId });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, userId, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error registering user" });
  }
};

module.exports = {
  loginController,
  registerController,
};
