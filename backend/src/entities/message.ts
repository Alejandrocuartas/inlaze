import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }],
  title: { type: String, required: true },
  text: { type: String, required: true },
});

const Message = mongoose.model('message', messageSchema);

export default Message;
