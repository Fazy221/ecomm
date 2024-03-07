const express = require("express");

const app = express();
app.use(express.json());
const errorMiddleware = require("./middleware/error");

// Routes imports
const product = require("./routes/productRoutes");
app.use("/api/v1", product);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
