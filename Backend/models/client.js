const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true},
    trainer: {type: Schema.Types.ObjectId, ref: 'Trainer'}
})

const Client = mongoose.model('client', ClientSchema)

module.exports = Client