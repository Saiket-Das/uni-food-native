const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .get(foodController.getAllFood)
  .post(verifyToken, authorization("owner"), foodController.addFood);

router.route("/favourite").get(foodController.studentFavourite);

router
  .route("/:id")
  .get(foodController.getFoodById)
  .delete(verifyToken, authorization("owner"), foodController.deleteFoodById)
  .patch(verifyToken, authorization("owner"), foodController.updateFoodById);

module.exports = router;
