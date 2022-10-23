const mongoose = require("mongoose");
const validator = require("validator");

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide food's name"],
      unique: [true, "Please provide unique food's name"],
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },

    description: {
      type: String,
      required: [true, "Please provide food's description"],
      trim: true,
      maxLength: [300, "Food description is too large"],
    },

    price: {
      type: Number,
      required: [true, "Please provide food's price"],
    },

    imageURL: {
      type: String,
      required: [true, "Please provide food's imgae URL"],
      validate: [validator.isURL, "You provide a wrong url"],
    },

    available: {
      type: String,
      enum: ["yes", "no"],
      default: "yes",
    },

    orderCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
