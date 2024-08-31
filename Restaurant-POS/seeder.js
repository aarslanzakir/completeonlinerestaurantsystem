const mongoose = require("mongoose");
const connectDb = require("./config/config.js");
const itemModel = require("./models/itemModel");
const items = require("./utils/data");
const dotenv = require("dotenv");

require("colors");
//config
dotenv.config();
connectDb();

//function seeder
const importData = async () => {
  try {
    await connectDb(); // Ensure the database connection is established
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);
    console.log("All Items Added".bgGreen);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.inverse);
    process.exit(1);
  }
};
importData();
