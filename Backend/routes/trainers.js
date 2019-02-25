const express = require('express');
const router = express.Router();
const Trainer = require('../models/trainer')

router.get('/', (req, res, next) => {
  Trainer.find()
      .exec((err, trainers) => {
        if(err){
          return next(err)
        }
          res.send(trainers)
      })
})

router.get('/:id', (req, res, next) => {
  Trainer.findById(req.params.id)
      .exec((err, trainer) => {
        if(err){
          return next(err)
        }
        res.send(trainer)
      })
})

router.post('/', (req, res, next) => {
  console.log(req)
  let trainer = new Trainer({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })
  console.log(trainer)
  trainer.save(function(err){
    if(err){
      return next(err)
    }
    res.send(trainer)
  })
})

router.delete('/:id', (req, res, next) => {
  Trainer.findOneAndDelete({'_id': req.params.id})
      .then(data => res.json(data))
      .catch(next)
})

module.exports = router;
