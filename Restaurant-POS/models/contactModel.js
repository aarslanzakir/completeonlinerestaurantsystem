const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Corrected typo from 'timestamp' to 'timestamps'
);

const Feedback = mongoose.model("Feedback", contactSchema); // Renamed to singular 'Contact'

module.exports = Feedback; // Export the model
