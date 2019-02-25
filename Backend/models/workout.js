const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    name: {type: String, required: true},
    keywords: [{type: String, unique: true, lowercase: true, required: true}],
    trainer: {type: Schema.Types.ObjectId, ref: 'Trainer'}
})

const Workout = mongoose.model('workout', WorkoutSchema)

module.exports = Workout