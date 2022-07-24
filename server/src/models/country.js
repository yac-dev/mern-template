import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code1: {
    type: String,
    required: true,
  },
  code2: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: [Number],
  },
  timezones: [String],
  flagPics: [String],
});

countrySchema.index({ location: '2dsphere' });

const Country = mongoose.model('Country', countrySchema);
export default Country;
