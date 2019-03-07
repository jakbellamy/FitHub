const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    name: {type: String, required: true},
    keywords: [{type: String, lowercase: true, required: true}],
    trainer: {type: Schema.Types.ObjectId, ref: 'Trainer'},
    superSets: [{type: Schema.Types.ObjectId, ref: 'Superset'}]
})

const Workout = mongoose.model('workout', WorkoutSchema)

module.exports = Workout