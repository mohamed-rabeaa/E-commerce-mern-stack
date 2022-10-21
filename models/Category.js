const mongoose = require("mongoose");

const CategorieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    desc: String,
    parentId: String,
    img: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categorie", CategorieSchema);
