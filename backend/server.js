require("dotenv").config();
const dbConnection = require("./confiq/db");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// ------> Middleware
app.use(cors());
app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
  res.send("Unifood is running");
});

app.listen(port, function () {
  console.log(`Unifood is running on ${port}`.yellow);
});
