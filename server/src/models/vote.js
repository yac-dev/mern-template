import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  voter: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  // どのpollに対して、どのoptionを選んだかを保存する。
  poll: {
    type: mongoose.Schema.ObjectId,
    ref: 'Poll',
  },
  option: {
    type: mongoose.Schema.ObjectId,
    ref: 'Option',
  },
  createdAt: {
    type: Date,
  },
});

const Vote = mongoose.model('Vote', voteSchema);
export default Vote;
