const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment')

router.get('/', (req, res, next) => {
  Appointment.find({}, 'action')
      .then(data => res.json(data))
      .catch(next)
})

router.post('/', (req, res, next) => {
  if(req.body.action){
    Appointment.create(req.body)
        .then(data => res.json(data))
        .catch(next)
  }else {
    res.json({
      error: "the input field is empty"
    })
  }
})

router.delete('/:id', (req, res, next) => {
  Appointment.findOneAndDelete({'_id': req.params.id})
      .then(data => res.json(data))
      .catch(next)
})

module.exports = router;