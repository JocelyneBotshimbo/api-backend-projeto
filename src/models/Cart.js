const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],

    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    address: {
        street:{
            type: String,
            required: true
        },

        number: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        }   
    },

    payment: {
        card: {
            number:{
                type: String
            },

            cvc:{
                type: String
            }

        }
    }

})

module.exports = mongoose.model('Cart', Schema)
