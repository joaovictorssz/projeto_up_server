require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db/db')
const authRoutes = require('./routes/auth')
const familyRoutes = require('./routes/family')
const usersRoutes = require('./routes/users')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use('/auth', authRoutes)
app.use('/family', familyRoutes)
app.use('/users', usersRoutes)

const PORT = process.env.PORT || 30330

app.listen(PORT, ()=>{
    console.log('O servidor está rodando na porta ', PORT)
})