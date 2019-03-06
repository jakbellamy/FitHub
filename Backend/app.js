const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const http = require('http')
const clients = require('./routes/clients.js');
const trainers = require('./routes/trainers.js');
const supersets = require('./routes/supersets.js');
const workouts = require('./routes/workouts.js');
const app = express();
const passport = require('./config/passport')
const keys = require('./config/keys')
const auth = require('./routes/auth');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/supersets', supersets);
app.use('/trainers', trainers);
app.use('/workouts', workouts);
app.use('/clients', clients);

app.use('/auth', auth);

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const server = http.createServer(app)
const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/FitHub')
mongoose.Promise = global.Promise;
console.log('connecting')
server.listen(port)

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log(`connected to ${port}`)
module.exports = app