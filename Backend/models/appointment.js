const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    trainer: {type: Schema.Types.ObjectId, required: true, ref: 'Trainer'},
    clients: [{type: Schema.Types.ObjectId, required: true, ref: 'Client'}],
    workout: {type: Schema.Types.ObjectId, required: true, ref: 'Workout'},
    date_time: {type: Date, required: true}
})

const Appointment = mongoose.model('appointment', AppointmentSchema)

module.exports = Appointment

