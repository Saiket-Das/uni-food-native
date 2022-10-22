const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/register", userController.register);

// router.post("/login", authController.login);

// router
//   .route("/profile-update")
//   .patch(verifyToken, authController.userProfileUpdate);

module.exports = router;
