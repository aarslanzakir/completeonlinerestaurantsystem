const Feedback = require("../models/contactModel");

//get-contacts
exports.getAllContacts = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//add-contacts
exports.createContact = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ message: "Feedback created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
