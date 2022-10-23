const User = require("../models/user.model");
const { generateToken } = require("../utils/token");

// -------> Sign up
exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    const createdUser = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      data: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        token: generateToken(createdUser._id),
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to sign up",
      error: error.message,
    });
  }
};

// -------> Sign up
exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "Fail",
        message: "No user found",
      });
    }

    const isPassowrdValid = user.matchPassword(password, user.password);

    if (!isPassowrdValid) {
      return res.status(403).json({
        status: "Fail",
        error: "Invalid email or password",
      });
    }

    res.status(200).json({
      success: true,
      data: generateToken(user),
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong to sign in",
      error: error.message,
    });
  }
};

// -------> Update profile
exports.profileUpdate = async (req, res, next) => {
  try {
    const result = await User.updateOne({ _id: req.user.data._id }, req.body, {
      runValidator: true,
    });

    res.status(200).json({
      success: true,
      message: "Successfully update user info",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
