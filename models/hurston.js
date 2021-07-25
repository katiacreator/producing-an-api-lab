import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Hurston
}

const hurstonSchema = new Schema({
  title: {type: String, required: true},
  type: {type: String, default: "Book"},
  published: {type: Date}
})

const Hurston = mongoose.model("Hurston", hurstonSchema)