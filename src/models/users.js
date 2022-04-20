import mongoose from 'mongoose';

const Schema = mongoose.Schema(
  {
    fullname: String,
    email: String,
    pass: String,
    usertype: Number,
    messageList:[{ type : mongoose.ObjectId, ref: 'messages' }],
  },
  { collection: "users" }
);

export default mongoose.model("Users", Schema);
