import mongoose from 'mongoose';

const pollSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  // 6つまでにしよう
  options: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Option',
    },
  ],
  type: {
    type: String,
    default: 'text',
    enum: {
      values: ['text', 'picture', 'video'],
    },
  },
  createdAt: {
    type: Date,
  },
  totalVotes: {
    type: Number,
    default: 0,
  },
  totalComments: {
    type: Number,
    default: 0,
  },
});

pollSchema.virtual('votes', {
  ref: 'Vote',
  foreignField: 'poll',
  localField: '_id',
});

const Poll = mongoose.model('Poll', pollSchema);
export default Poll;
