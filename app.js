// importing required packages
require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({ extended: true }));

// using routes
app.use("/products", require("./routes/products"));

// starting the server
const PORT = 3000; // Use port from environment variable or default to 3000
app.listen(PORT, function () {
  console.log(`API is live on http://localhost:${PORT}/products`);
});
