import mongoose from 'mongoose';

const countryDataSchema = new mongoose.Schema({
  // どのpollに対して、このcountry dataですよってこと。
  poll: {
    type: mongoose.Schema.ObjectId,
    ref: 'Poll',
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: 'Country',
  },
  data: [
    {
      option: {
        type: mongoose.Schema.ObjectId,
        ref: 'Option',
      },
      totalVotes: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const CountryData = mongoose.model('CountryData', countryDataSchema);
export default CountryData;
