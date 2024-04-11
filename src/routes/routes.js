const { Router } = require('express') // 
const Aluno = require('../models/Aluno')

const routes = new Router()

// GET - Lista alguma coisa
// POST - Criar/adicionar algo
// PUT - Atualizar algo
// DELETE - Deleta algo
// PATCH - depois

// criar uma rota
 // tipo
 // path
 // implementacao

routes.get('/bem_vindo', (req, res) => {
    res.json({name: 'Bem vindo'})
})


routes.post('/alunos', (req, res) => {

    const nome = req.body.nome
    const data_nascimento = req.body.data_nascimento
    const celular = req.body.celular

    Aluno.create({
        nome: nome,
        data_nascimento: data_nascimento,
        celular: celular
    })  
   res.json({name: 'entrei aqui'})
})

module.exports = routes

