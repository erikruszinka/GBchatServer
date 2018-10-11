const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const chat = require('./routes/api/chat');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(()=> console.log('MongoDB is running')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));


app.use('/api/profile', profile);
app.use('/api/chat', chat);
app.use('/api/users', users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));