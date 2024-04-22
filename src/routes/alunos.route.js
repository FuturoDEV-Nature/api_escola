const { Router } = require('express') 
const { auth } = require('../middleware/auth')

const AlunoController = require('../controllers/AlunoController')

const alunoRoutes = new Router()

alunoRoutes.post('/', AlunoController.cadastrar)
alunoRoutes.get('/', auth, AlunoController.listar)
alunoRoutes.get('/:id', auth, AlunoController.listarUm)

module.exports = alunoRoutes