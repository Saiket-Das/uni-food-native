const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    orderItems: [
      {
        foodId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Food",
        },
        name: {
          type: String,
          required: true,
        },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
