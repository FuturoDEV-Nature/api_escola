const { Router } = require('express') // 

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

module.exports = routes

