const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.route");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .get(foodController.getAllFood)
  .post(verifyToken, authorization("owner"), foodController.addFood);

module.exports = router;
