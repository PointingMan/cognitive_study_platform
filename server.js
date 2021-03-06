const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const keys = require('./config/keys')

const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express(); //Run new express server

const {
  PORT = 4000,
} = process.env
app.use(express.json()); //Understand requests as json

const db = keys.mongoURI; //Finds database with URI
mongoose //Piece of middleware
  .connect(db) //mongoose connects to database
  .then(() => console.log('MongoDB Connected...')) //If succesful then console log
  .catch(err => console.log(err)); //Catch error if not successful

app.use('/api/users', users);
app.use('/api/auth', auth);
 //Tells that you can send requests to /api/items and then use router from items file

const port = process.env.PORT || 4000; //Use port 4000

app.listen(port, () => console.log(`Server started ${port}`)); //Gets app to listen on the port
