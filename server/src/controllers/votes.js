import Vote from '../models/vote';
import Option from '../models/option';
import Poll from '../models/poll';
import CountryData from '../models/countryData';
import User from '../models/user';

export const createVote = async (request, response) => {
  try {
    const { voterId, pollId, optionId } = request.body;
    const vote = await Vote.create({
      voter: '62cd26d3fdde8c97ade314b6',
      poll: pollId,
      option: optionId,
      createdAt: new Date(),
    });
    const poll = await Poll.findById(pollId);
    poll.totalVotes++;
    await poll.save();
    const option = await Option.findById(optionId);
    option.totalVotes++;
    await option.save();

    let dataObj;
    const voter = await User.findById('62cd26d3fdde8c97ade314b6');
    const countryData = await CountryData.findOne({ country: voter.nationality._id, poll: pollId });
    if (countryData) {
      let checked = false;
      // O(n^2)避ける、find
      for (let i = 0; i < countryData.data.length; i++) {
        if (countryData.data[i].option._id.toString() === optionId) {
          checked = true;
          countryData.data[i].totalVotes++;
          await countryData.save();
        }
      }
      if (!checked) {
        dataObj = {
          option: optionId,
          totalVotes: 1,
        };
        countryData.data.push(dataObj);
        await countryData.save();
      }
    } else {
      dataObj = {
        option: optionId,
        totalVotes: 1,
      };
      const cData = new CountryData({
        poll: pollId,
        country: voter.nationality._id,
      });
      cData.data.push(dataObj);
      await cData.save();
    }
    response.status(201).json({
      vote,
    });
  } catch (error) {
    console.log(error);
  }
};
