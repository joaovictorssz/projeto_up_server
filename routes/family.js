const express = require('express')
const Familia = require('../models/family');
const router = express.Router();

//Listar todas
router.get('/list', async (req, res)=>{
    const all_families = await Familia.find()
    return res.json(all_families)
})

//Listar pelo ID
router.get('/list/:id', async (req, res)=>{

    const family = await Familia.findById(req.params.id)
    if(!family){
        return res.status(400).json({message: 'Familia não encontrada'})
    }
    return res.json(family)
})

//Adicionar
router.post('/register', async (req, res)=>{

    const adressAlreadyExists = await Familia.findOne({
        'dados_pessoais.endereco': req.body.dados_pessoais.endereco, 
        'dados_pessoais.bairro': req.body.dados_pessoais.bairro, 
        'dados_pessoais.numero': req.body.dados_pessoais.numero, 
        
    })

    if(!adressAlreadyExists){
        const newFamily = new Familia({
            composicao_familiar: req.body.composicao_familiar, 
            dados_moradia: req.body.dados_moradia,
            dados_pessoais: req.body.dados_pessoais,
            situacao_economica_familiar: req.body.situacao_economica_familiar,
            cadastrado_por: req.body.cadastrado_por,
            data_de_cadastro: req.body.data_de_cadastro,
            id_voluntario: req.body.id_voluntario
        })

        const addedFamily = await newFamily.save()

        if(addedFamily){
            return res.status(200).json({message: "Familia adicionada com sucesso"})
        }
        else{
            return res.status(500).json({message: "Erro ao cadastrar família"})
        }
    }
    else{
        return res.status(500).json({message: "Endereco já cadastrado"})
    }

})


//Deletar

router.delete('/delete/:id', async (req, res)=>{
    try{
        const familyID = req.params.id
        await Familia.findByIdAndRemove(familyID)

        return res.status(204).send()
    }
    catch{
        return res.status(500).json({message: "Erro ao deletar família"})
    }
})

//Atualizar

router.put('/update/:id', async (req, res)=>{
    try{
        const familyID = req.params.id

        const updatedFamily = await Familia.findByIdAndUpdate(familyID, req.body)

        if(updatedFamily){
            return res.status(204).send()
        }
    }
    catch{
        return res.status(500).json({message: "Erro ao atualiar a família"})
    }
})


module.exports = router
    