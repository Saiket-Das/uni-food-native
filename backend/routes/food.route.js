const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .get(foodController.getAllFood)
  .post(verifyToken, authorization("owner"), foodController.addFood);

router
  .route("/:id")
  .get(foodController.getFoodById)
  .delete(verifyToken, authorization("owner"), foodController.deleteFoodById);

module.exports = router;
