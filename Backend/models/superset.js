const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SupersetSchema = new Schema({
    name: {type: String, required: true},
    keywords: [{type: String, lowercase: true, required: true}],
    sets:  {
            reps: {type: Number},
            excercises: [{
                name: {type: String, required: true},
                reps: {type: Number, required: true}
            }]
        },
    workouts: [{type: Schema.Types.ObjectId}]
})

const Superset = mongoose.model('superset', SupersetSchema)
module.exports = Superset