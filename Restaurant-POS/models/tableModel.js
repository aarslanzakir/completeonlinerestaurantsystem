const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: String,
    required: true,
  },
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
