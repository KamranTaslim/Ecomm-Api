require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");

// Connecting mongoose to the MongoDB server
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
