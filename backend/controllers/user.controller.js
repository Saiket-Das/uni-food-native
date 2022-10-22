const User = require("../models/user.model");
const { generateToken } = require("../utils/token");

// -------> Register
exports.register = async (req, res, next) => {
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
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// -------> Login
