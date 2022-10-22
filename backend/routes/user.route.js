const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/signup", userController.signup);

router.post("/signin", userController.signin);

// router
//   .route("/profile-update")
//   .patch(verifyToken, authController.userProfileUpdate);

module.exports = router;
