const mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    foodName: {
        type: String,
        required: true
    },

    foodDescription: {
        type: String,
        required: true
    },

    foodPrice: {
        type: Number,
        required: true
    },

    foodQuantity: {
        type: Number,
        required: true
    },
    
    foodImage: {
        type: String,
    },

    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Food', Schema)
