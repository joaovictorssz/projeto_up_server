const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const Profile = require('../models/profile');



//Listar usuários
router.get('/list', async (req, res)=>{
    const users = await Profile.find()
    return res.json(users)
})

//Deletar um usuário
router.delete('/delete/:id', async (req, res)=>{
    try{
        const profileID = req.params.id

        await Profile.findByIdAndRemove(profileID)

        return res.status(204).send()
    }
    catch{
        return res.status(500).json({message: "Erro ao deletar usuário"})
    }
})

//Atualizar usuário

router.put('/update/:id', async (req, res)=>{
    try{
        const profileID = req.params.id

        const updatedProfile = await Profile.findByIdAndUpdate(profileID, req.body)
        if(!updatedProfile){
            return res.status(500).json({message: "Erro ao atualizar este usuário"})
        }
        return res.json(updatedProfile)
    }
    catch{
        return res.status(500).json({message: "Erro ao atualizar este usuário"})
    }
})


module.exports = router