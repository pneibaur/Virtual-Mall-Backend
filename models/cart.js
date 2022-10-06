const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  total: Number,
  qty: Number,
});

module.exports = mongoose.model("Cart", cartSchema);
