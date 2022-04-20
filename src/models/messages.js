import mongoose from 'mongoose';

const Schema = mongoose.Schema(
  {
    category: { type : mongoose.ObjectId, ref: 'Categories' },
    text: String,
  },
  { collection: "messages" }
);

export default mongoose.model("Messages", Schema);
