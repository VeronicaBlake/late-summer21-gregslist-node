import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true, default: 0 },
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    pictures: [{ type: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
