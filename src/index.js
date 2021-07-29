const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes')

const app = express();

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connect to database'));

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.listen (8000, () => console.log('Server running'));