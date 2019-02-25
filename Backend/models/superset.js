const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SupersetSchema = new Schema({
    name: {type: String, required: true},
    keywords: [{type: String, unique: true, lowercase: true, required: true}],
    sets: [{type: String, required: true}],
    workout: {type: Schema.Types.ObjectId}
})

const Superset = mongoose.model('superset', SupersetSchema)
module.exports = Superset