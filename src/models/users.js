import mongoose from 'mongoose';

const Schema = mongoose.Schema(
    {
      fullname: String,
      email: String,
      pass: String,
      usertype: Number
      //usertype: { type: mongoose.ObjectId, ref: "Company" },
    },
    { collection: "users" }
);

export default mongoose.model("Users", Schema)
