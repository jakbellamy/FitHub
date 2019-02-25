const express = require('express')
const router = express.Router()
const Client = require('../models/client')

router.get('/', (req, res, next) => {
  Client.find()
      .populate('trainer')
      .exec((err, clients) => {
        if(err){
          return next(err)
        }
        res.send(clients)
      })
})

router.get('/:id', (req, res, next) => {
  Client.findById(req.params.id)
      .populate('trainer')
      .exec((err, client) => {
        if(err){
          return next(err)
        }
        res.send(client)
      })
})

router.post('/', (req, res, next) => {
  let client = new Client({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    trainer: req.body.trainer
  })
  client.save( (err) => {
    if(err){
      return next(err)
    }
    res.send('client created')
  })
})

router.delete('/:id', (req, res, next) => {
  Client.findOneAndDelete({'_id': req.params.id})
      .then(data => res.json(data))
      .catch(next)
})

module.exports = router