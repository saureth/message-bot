import mongoose from 'mongoose';

const Schema = mongoose.Schema(
  {
    sender:{ type : mongoose.Schema.Types.ObjectId, ref: 'Users' },
    receiver:{ type : mongoose.Schema.Types.ObjectId, ref: 'Users' },
    message:{ type : mongoose.Schema.Types.ObjectId, ref: 'Messages' },
    date: String
  },
  { collection: "record" }
);

export default mongoose.model("Record", Schema);
