import mongoose from 'mongoose';

const Schema = mongoose.Schema(
  {
    fullname: { type: String, default: null},
    email: { type: String, unique: true },
    pass: String,
    usertype: {type: Number, default: 1},
    messageList:[{ type : mongoose.Schema.Types.ObjectId, ref: 'Messages' }],
    token: String
  },
  { collection: "users" }
);

export default mongoose.model("Users", Schema);
