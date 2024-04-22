const { Router } = require('express') // 
const Aluno = require('../models/Aluno')

const { auth } = require('../middleware/auth')
const AlunoController = require('../controllers/AlunoController')

const alunoRoutes = new Router()

alunoRoutes.post('/', AlunoController.cadastrar)

alunoRoutes.get('/', auth, async (req, res) => {
    const alunos = await Aluno.findAll()
    res.json(alunos)
})

alunoRoutes.get('/:id', auth, async (req, res) => {
    try {

        const { id } = req.params

        const aluno = await Aluno.findByPk(id)

        if (!aluno) {
            return res.status(404).json({ message: "Usuário não encontrado!" })
        }

        res.json(aluno)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: 'Não possível listar o aluno especifico',
            error: error
        })
    }
})

module.exports = alunoRoutes