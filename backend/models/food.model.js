const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide food's name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },

    description: {
      type: String,
      required: [true, "Please provide food's name"],
      trim: true,
      maxLength: [300, "Food description is too large"],
    },

    price: {
      type: Number,
      required: [true, "Please provide food's price"],
    },

    imageURL: {
      type: String,
      required: true,
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
