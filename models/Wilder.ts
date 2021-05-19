import mongoose from 'mongoose';

const WilderSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});
const WilderModel = WilderSchema;

export default mongoose.model('wilder', WilderModel);
