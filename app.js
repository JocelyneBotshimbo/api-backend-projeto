const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Middlewares

app.use('/posts', () => {
    console.log('This is a middleware running')
});

//routes
app.get('/',(req, res) => {
    res.send('Hello world');
});

app.get('/posts', (req, res) => {
    res.send('Salut tout le monde');
});

//How to we start listening to the server

app.listen (8000);