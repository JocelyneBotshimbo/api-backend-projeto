const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', Schema)
