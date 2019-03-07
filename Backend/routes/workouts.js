const express = require('express');
const router = express.Router();
const Workout = require('../models/workout')
const Superset = require('../models/superset')

router.get('/', (req, res, next) => {
  Workout.find()
      .populate('trainer')
      .exec((err, workout) => {
        if(err){
          return next(err)
        }
        res.send(workout)
      })
})

router.get('/:id', (req, res, next) => {
  Workout.findById(req.params.id)
      .populate('trainer')
      .exec((err, workout) => {
        if(err){
          return next(err)
        }
        res.send(workout)
      })
})

router.post('/', (req, res, next) => {
  console.log(req)
  let workout = new Workout({
    name: req.body.name,
    keywords: req.body.keywords,
    trainer: req.body.trainer
  })
  console.log(workout)
  workout.save(function(err){
    if(err){
      return next(err)
    }
    res.send(workout)
  })
})

router.delete('/:id', (req, res, next) => {
  Workout.findOneAndDelete({'_id': req.params.id})
      .then(data => res.json(data))
      .catch(next)
})

module.exports = router;