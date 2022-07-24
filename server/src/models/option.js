import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  poll: {
    type: mongoose.Schema.ObjectId,
    ref: 'Poll',
  },
  content: String,
  totalVotes: {
    type: Number,
    default: 0,
  },
});

const Option = mongoose.model('Option', optionSchema);
export default Option;
