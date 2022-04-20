import mongoose from 'mongoose';

const Schema = mongoose.Schema(
  {
    name: String
  },
  { collection: "categories" }
);

export default mongoose.model("Categories", Schema);
