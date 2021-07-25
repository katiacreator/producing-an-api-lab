import { Hurston } from '../models/hurston.js'

export {
  index,
  show,
  create,
  update,
  deleteHurston as delete
}

// Alternate method
// function index(req, res) {
//   Hurston.find({}, function (err, hurston) {
//     if (err) return res.status(200).json(hurston)
//     res.status(200).json(hurston)
//   })
// }


function index(req, res) {
  Hurston.find({})
  .then(hurston => {
    res.status(200).json(hurston)
  })
  .catch(err => {
    res.json(err)
  })
}

function show(req, res) {
  Hurston.findById(req.params.id)
  .then(hurston => {
    res.json(hurston)
  })
}

function create(req, res) {
  Hurston.create(req.body)
  .then(hurston => {
    res.json(hurston)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req, res) {
  Hurston.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((hurston) => {
    res.json(hurston)
  })
}

function deleteHurston(req, res) {
  Hurston.findByIdAndDelete(req.params.id)
  .then(hurston => {
    res.json(hurston)
  })
}