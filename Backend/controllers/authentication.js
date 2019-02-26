const jwt = require('jwt-simple')
const Trainer = require('../models/trainer')
const config = require('../config/keys')

const tokenForTrainer = (trainer) => {
    const timestamp = new Date().getTime()
    return jwt.encode({ sub: trainer.id})
}

exports.signin = (req, res, next) => {
    const token = tokenForTrainer(req.trainer)
    res.json({token: token})
}

exports.signup = (req, res, next) => {
    const name = req.body.name
    const username = req.body.username
    const password = req.body.password

    if(!username || !password){
        return res.status(422).send({error: 'You must provide both an email and a password.'})
    }

    Trainer.findOne({username: username}, (err, existingTrainer) => {
        if(err){
            return next(err)
        }
        if(existingTrainer){
            return res.status(422).send({error: 'username is already in use'})
        }

        const trainer = new Trainer({
            name: name,
            username: username,
            password: password
        })

        trainer.save((err) => {
            if(err){
                return next(err)
            }
            trainer.password = 'HIDDEN'
            token = tokenForTrainerres.json({token: token})
        })
    })
}

