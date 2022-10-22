const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },

    email: {
      type: String,
      required: [true, "Please provide your email"],
      trim: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 3,
            minSymbols: 1,
          }),
        message: "Your password too week",
      },
    },

    imageURL: {
      type: String,
      default:
        "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-user-user-tanah-basah-glyph-tanah-basah-7.png",
    },

    role: {
      type: String,
      enum: ["customer", "owner"],
      default: "customer",
    },

    contactNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        "Please provide a valid contact number",
      ],
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
