const Food = require("../models/food.model");

// -------> Add new food (Authorization - Owner)
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
      message: "Something went wrong to add new food",
      error: error.message,
    });
  }
};

// -------> Get all foods
exports.getAllFood = async (req, res, next) => {
  try {
    console.log("I have reached this api");
    const foods = await Food.find({});
    res.status(201).send({
      success: true,
      message: "Get all foods",
      data: foods,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to get all foods",
      error: error.message,
    });
  }
};

// -------> Get food by Id
exports.getFoodById = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);

    res.status(201).json({
      success: true,
      message: "Get food by Id",
      data: food,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to get food by Id",
      error: error.message,
    });
  }
};

// -------> Delete a Food by Id (Authorization - Owner)
exports.deleteFoodById = async (req, res, next) => {
  try {
    const result = await Food.deleteOne({ _id: req.params.id });

    if (result.deletedCount > 0) {
      res.status(201).json({
        success: true,
        message: "Delete food by Id",
        data: result,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Already deleted",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to delete food by Id",
      error: error.message,
    });
  }
};

// -------> Update a Food by Id (Authorization - Owner)
exports.updateFoodById = async (req, res, next) => {
  try {
    const result = await Food.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Update food details by Id",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to delete food by Id",
      error: error.message,
    });
  }
};

// -------> Get top 5 student's favourite Foods
exports.studentFavourite = async (req, res, next) => {
  try {
    const result = await Food.find({}).sort({ orderCount: -1 }).limit(3);

    res.status(200).json({
      success: true,
      message: "Get top 5 student's favourite Foods",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong to get foods",
      error: error.message,
    });
  }
};
