const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrainerSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true}
})

const Trainer = mongoose.model('Trainer', TrainerSchema)

module.exports = Trainer