const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');

const TrainerSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true}
})

TrainerSchema.pre('save', function (next) {
    let trainer = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(trainer.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                trainer.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

TrainerSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const Trainer = mongoose.model('Trainer', TrainerSchema)

module.exports = Trainer