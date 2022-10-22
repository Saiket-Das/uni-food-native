require("dotenv").config();
const dbConnection = require("./confiq/db");
const { notFound, errorHandler } = require("./middlewares/error");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// ------> Middleware
app.use(cors());
app.use(express.json());

// ------> Database
dbConnection();

const userRoutes = require("./routes/user.route");

// ------> Routes
app.get("/", (req, res) => {
  res.send("Unifood is running");
});

app.use("/api/user", userRoutes);

// ------> Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, function () {
  console.log(`Unifood is running on ${port}`.yellow);
});
