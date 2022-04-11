const express = require("express");
const app = express();
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down server due to uncaught exceptions");
  process.exit(1);
});

const products = require("../routes/product");
const connectDatabase = require("../../database");
const auth = require("../routes/auth");

const cookieParser = require("cookie-parser");

const errorMiddleware = require("../middlewares/errors");

dotenv.config();

connectDatabase();

app.use(express.json());

app.use(errorMiddleware);
app.use(cookieParser());

app.use("/api/v1", products);
app.use("/api/v1/", auth);

module.exports = app;

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejections");
  server.close(() => {
    process.exit(1);
  });
});
