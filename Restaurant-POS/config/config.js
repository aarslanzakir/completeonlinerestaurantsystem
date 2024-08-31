const mongoose = require("mongoose");
require("colors");

const connectDb = async () => {
  try {
    const uri =
      "mongodb+srv://aliarslanzakir:111Ali111@cluster0.dpfz3xd.mongodb.net/RestroManager";

    if (!uri) {
      throw new Error("MongoDB URI is undefined");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection has been made!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message.red);
  }
};

// Call the connectDb function
connectDb();

// Export the connectDb function
module.exports = connectDb;
