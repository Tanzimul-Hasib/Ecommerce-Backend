const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", categorySchema);
