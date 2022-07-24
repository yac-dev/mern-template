import Poll from '../models/poll';
import Option from '../models/option';
import User from '../models/user';
import mongoose from 'mongoose';

export const createPoll = async (request, response) => {
  try {
    // options [honda, toyota, bmw, nissan]
    const { creatorId, title, type, options } = request.body;
    console.log(options);
    const poll = new Poll({
      creator: creatorId,
      title,
      type,
      createdAt: new Date(),
    });

    const optionDocuments = [];
    for (let i = 0; i < options.length; i++) {
      const optionDocument = await Option.create({
        poll: poll._id,
        content: options[i],
      });
      optionDocuments.push(optionDocument);
    }

    poll.options = optionDocuments;

    await poll.save();
    response.status(201).json({
      poll,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getRandomPolls = async (request, response) => {
//   try {
//     const { voterId } = request.body;
//     const polls = await Poll.find()
//       .populate({
//         path: 'options',
//       })
//       .populate({
//         path: 'votes',
//         select: 'poll',
//       });
//     // どういうdata structureになるか。。。
//     // poll {_id: 1, creator: 123, votes: [{id: ..., voter: 1111, poll: 1}, {id: ..., voter: 2222, poll: 11}]}
//     // 一つ一つのpoll自体、こんな形になることになる。これのarrayだね。
//     // const pollsNotVoted = polls.filter((poll) => poll.voter._id.toString() !== '62cd26d3fdde8c97ade314b6');

//     response.status(200).json({
//       polls,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPolls = async (request, response) => {
  try {
    const polls = await Poll.find()
      .populate({
        path: 'creator',
      })
      .populate({
        path: 'options',
      });

    response.status(200).json({
      polls,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRandomPoll = async (request, response) => {
  try {
    const { userId } = request.body;
    const user = await User.findById(userId).populate({ path: 'votes' });
    const { votes } = user;
    // これで、userがvoteしたpollのidだけ取る。
    const voteIds = votes.map((vote) => {
      return new mongoose.Types.ObjectId(vote.poll.toString());
    });

    // 自分がvoteしたpollのidだけ、filter outして、そのarrayをuserにresponseする。
    const pollsNotAnswered = await Poll.aggregate([
      {
        $match: {
          _id: {
            $nin: voteIds,
          },
        },
      },
    ]);
    response.status(200).json({
      pollsNotAnswered,
    });
  } catch (error) {
    console.log(error);
  }
};
