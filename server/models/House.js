import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    year: { type: Number, required: true },
    price: { type: Number, required: true, default: 0 },
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    bedrooms: { type: Number, default: 0, required: true },
    bathrooms: { type: Number, default: 0, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
