import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Hurston
}

const hurstonSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  type: String,
  yearPublished: Number
})

const Hurston = mongoose.model("Hurston", hurstonSchema)