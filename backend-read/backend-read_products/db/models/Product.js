import mongoose from "mongoose";
import "./Review";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  currency: { type: String, require: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
