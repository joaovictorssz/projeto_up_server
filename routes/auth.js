const express = require('express')
const Profile = require('../models/profile');
const router = express.Router();
const bcrypt = require('bcryptjs')



//Rota de login
router.post('/login', async (req, res)=>{
    const {email, password} = req.body
    const userExists = await Profile.findOne({email: email})
    if(!userExists){
        return res.status(500).json({message: "Email não cadastrado"})
    }

    const isValidPassword = await bcrypt.compare(password, userExists.password)
    if(!isValidPassword){
        return res.status(500).json({message: 'Senha inválida'})
    }
    return res.status(200).json(userExists)
})

//Rota de cadastro
router.post('/register',async (req, res) => {
    const {username, email, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //Verificar se o email já está cadastrado

    const existingUser = await Profile.findOne({email})

    if(existingUser){
        return res.status(400).json({message: "E-mail já cadastrado anteriormente"})
    }

    const newProfile = new Profile({email, username, password: hashedPassword, auditor: false, qtd_cadastros: 0})
    const createdProfile = await newProfile.save()
  
    if(!createdProfile){
        res.status(500).json({message: "Erro ao cadastrar usuário"})
    }
    else{
        res.status(200).json(createdProfile)
    }

})

module.exports = router