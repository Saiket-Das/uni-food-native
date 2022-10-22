const Food = require("../models/food.model");

// -------> Add new Food
exports.addFood = async (req, res, next) => {
  try {
    const food = await Food.create(req.body);

    res.status(201).json({
      success: true,
      message: "New food added",
      data: food,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to sign up",
      error: error.message,
    });
  }
};
