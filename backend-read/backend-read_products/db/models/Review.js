import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String, require: true },
  text: { type: String, require: true },
  rating: { type: Number, require: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
