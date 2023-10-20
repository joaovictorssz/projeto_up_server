const mongoose = require('mongoose')
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
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile