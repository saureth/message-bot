import mongoose from 'mongoose';

const Schema = mongoose.Schema(
  {
    category: Number,
    text: String,
  },
  { collection: "messages" }
);

export default mongoose.model("Messages", Schema)
