const mongoose = require('mongoose')

// let RegisterUser = new mongoose.Schema({
//     username : {
//         type: String,
//         required: true
//     },
//     email : {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password : {
//         type: String,
//         required: true
//     },
//     account : {
//         type: String,
//         required: true
//     },
//     balance : {
//         type: String
//     }

// })
let UserRegister = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true
    },
    account : {
        type: Number,
    },
    balance : Number,
    phone : String,
    address : String,
    city: String

})

// module.exports = mongoose.model('RegisterUser', RegisterUser)
module.exports = mongoose.model('BankUser', UserRegister) //bankusers in mongodb