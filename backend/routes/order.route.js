const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .post(verifyToken, authorization("customer"), orderController.AddOrder);
// .get(orderController.getAllOrder);
// router
//   .route("/:id")
//   .get(foodController.getFoodById)
//   .delete(verifyToken, authorization("owner"), orderController.deleteFoodById)

module.exports = router;
