import mongoose from "mongoose";

const { Schema } = mongoose;
const productSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  currency: { type: String, require: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
