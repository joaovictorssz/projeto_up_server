const mongoose = require('mongoose')
const Familia = require('./family')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    auditor:{
        type: Boolean,
        required: true
    },
    qtd_cadastros:{
        type: Number
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile