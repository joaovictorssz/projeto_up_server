const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dadosPessoaisSchema = new Schema({
     nome: {
         type: String,
         required: true
     },
     nome_social: {
         type: String,
     },
     sexo: {
         type: String,
     },
     data_nascimento:{
         type: String
     },
     idade:{
         type: String
     },
     natural_de:{
         type: String
     },
     estado_civil:{
         type: String
     },
     endereco:{
	    type: String,
         required: true
     },
     ponto_de_referencia:{
	    type: String
     },
     numero:{
	    type: String,
         required: true
     },
     bairro:{
         type: String,
         required: true
     },
     telefone_1:{
         type: String,
         required: true
     },
     telefone_2:{
         type: String
     },
     email:{
         type: String
     },
})

const dadosMoradiaSchema = new Schema({
    tipo_de_moradia:{
         type: String
    },
    tipo_de_construcao:{
         type: String
    },
    cedida:{
         type: String
    },
    cedida_por_quem:{
         type: String
    },
    financiada:{
         type: String
    },
    valor_do_financiamento:{
         type: String
    },
    numero_de_comodos:{
         type: String
    },
})

const situacaoEconomicaFamiliarSchema = new Schema({
    atividade_remunerada:{
        type: String
    },
    profissao:{
        type: String
    },
    renda_recebida: {
        type:  String
    }
})

const composicaoFamiliarSchema = new Schema({
    nome:{
         type: String
    },
    idade:{
         type: String
    },
    sexo:{
         type: String
    },
    parentesco:{
         type: String
    },
    ocupacao:{
         type: String
    },
    renda_mensal:{
         type: String
    },
})

const cestasEntregues = new Schema({
    data_de_entrega: {
        type: String
    },
    voluntario: {
        type: String
    }

})

const familiaSchema = new Schema({
    dados_pessoais: dadosPessoaisSchema,
    dados_moradia: dadosMoradiaSchema,
    situacao_economica_familiar: situacaoEconomicaFamiliarSchema,
    composicao_familiar: [composicaoFamiliarSchema],
    cadastrado_por: String,
    data_de_cadastro: String,
    id_voluntario: String,
    cestas_entregues: [cestasEntregues]
})

const Familia = mongoose.model('Familia', familiaSchema)

module.exports = Familia