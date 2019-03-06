const express = require('express');
const router = express.Router();
const Superset = require('../models/superset')
const passport = require('passport');
    require('../config/passport')(passport);

router.get('/', (req, res, next) => {
  Superset.find({}, )
      .populate('workout')
      .then(data => res.json(data))
      .catch(next)
})

router.get('/:id', (req, res, next) => {
  Superset.findById(req.params.id)
      .populate('workout')
      .exec((err, superset) => {
        if(err){
          return next(err)
        }
        res.send(superset)
      })
})

router.post('/', (req, res, next) => {
  let superset = new Superset({
    name: req.body.name,
    keywords: req.body.keywords,
    sets: req.body.sets,
    workouts: req.body.workouts
  })
  console.log(superset)
  superset.save(function(err){
    if(err){
      return next(err)
    }
    res.send(superset)
  })
})

router.delete('/:id', (req, res, next) => {
  Superset.findOneAndDelete({'_id': req.params.id})
      .then(data => res.json(data))
      .catch(next)
})

module.exports = router;