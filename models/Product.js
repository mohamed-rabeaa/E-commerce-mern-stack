const mongoose = require("mongoose");

const ProductieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    price: {type: Number, required: true},
    category: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category",
      required: true
        },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductieSchema);
