// Import and Set up expressJS
const express = require("express");
const app = express(); // Initialize express

// Colors for console log
const colors = require("colors");

// Set up environment variables in .env file
const dotenv = require("dotenv").config();

// The port we want our server to run on
const port = process.env.PORT || 5000; // or is env global variable not found just 5000

// Import error handling
const { errorHandler } = require("./middleware/errorMiddleware");

// Importing and Connecting to MongoDB
const connectDB = require("./config/db");

connectDB();

// Set up so we could send a json for POST or PUT
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// All routes
app.use("/api/users", require("./routes/userRoutes"));

//This overwrite default express error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`.cyan.bold));
