const { Router, query } = require('express') // 
const Aluno = require('../models/Aluno')

const { sign } = require('jsonwebtoken')

const loginRoutes = new Router()

loginRoutes.get('/bem_vindo', (req, res) => {
    res.json({ name: 'Bem vindo' })
})

loginRoutes.post('/', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email) {
            return res.status(400).json({ message: 'O email é obrigatório' })
        }

        if (!password) {
            return res.status(400).json({ message: 'O password é obrigatório' })
        }

        const aluno = await Aluno.findOne({
            where: {email:email, password:password}
        })

        if(!aluno){
            return res.status(404).json({ error: 'Nenhum aluno corresponde a email e senha fornecidos!' })
        }

        const payload = {sub: aluno.id, email: aluno.email, nome: aluno.nome}

        const token = sign(payload, process.env.SECRET_JWT)        

        res.status(200).json({Token: token})

    } catch (error) {
        return res.status(500).json({ error: error, message: 'Algo deu errado!' })
    }
})




module.exports = loginRoutes
