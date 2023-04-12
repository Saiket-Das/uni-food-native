const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

router
  .route("/")
  .get(verifyToken, authorization("owner"), orderController.getAllOrder)
  .post(verifyToken, orderController.AddOrder);
// .post(verifyToken, authorization("customer"), orderController.AddOrder);

router
  .route("/:id")
  .get(verifyToken, authorization("owner"), orderController.getOrderById)
  .delete(verifyToken, authorization("owner"), orderController.deleteOrderById);

module.exports = router;
