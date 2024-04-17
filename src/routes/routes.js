const { Router, query } = require('express') // 
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')

const routes = new Router()

routes.get('/bem_vindo', (req, res) => {
    res.json({ name: 'Bem vindo' })
})

/* ----  Rotas dos Alunos ---- */

routes.post('/alunos', async (req, res) => {
    try {
        const nome = req.body.nome
        const data_nascimento = req.body.data_nascimento
        const celular = req.body.celular

        if (!nome) {
            return res.status(400).json({ messagem: 'O nome é obrigatório' })
        }

        if (!data_nascimento) {
            return res.status(400).json({ messagem: 'A data de nascimento é obrigatória' })
        }

        if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
            return res.status(400).json({ messagem: 'A data de nascimento é não está no formato correto' }) 
        }

        const aluno = await Aluno.create({
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular
        })

        res.status(201).json(aluno)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível cadastrar o aluno' })
    }
})

routes.get('/alunos', async (req, res) => {
    const alunos = await Aluno.findAll()
    res.json(alunos)
})

routes.get('/alunos/:id', async (req, res) => {
    try {

        const { id } = req.params

        const aluno = await Aluno.findByPk(id)

        if(!aluno){
            return res.status(404).json({ message: "Usuário não encontrado!"})
        }

        res.json(aluno)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível listar o aluno especifico',
                              error: error})
    }
})

/* ----  Rotas dos Cursos ---- */

routes.post('/cursos', async (req, res) => {
    try {
        const nome = req.body.nome
        const duracao_horas = req.body.duracao_horas

        if(!nome) {
            return res.status(400).json({messagem: "O nome é obrigatório" })
        }

        if(!(duracao_horas >= 40 && duracao_horas <= 200)) {
            return res.status(400).json({  messagem: "A duração do curso deve ser entre 40 e 200 horas"
            })
        }

        const curso = await Curso.create({
            nome: nome,
            duracao_horas: duracao_horas
        })

        res.status(201).json(curso)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível cadastrar o curso' })
    }

})


routes.get('/cursos', async (req, res) => {
    try {
        let params = {}

        // SE for passado uma paramero QUERY chamado "nome" na requisição, então
           // esse parametro "nome" é adicionado dentro da variavel params
        if(req.query.nome)  {
            // o ...params, cria uma cópia do params com os chaves e valores já existentes
            params = {...params, nome: req.query.nome}
        }

        if(req.query.duracao_horas)  {
            // o ...params, cria uma cópia do params com os chaves e valores já existentes
            params = {...params, duracao_horas: req.query.duracao_horas}
        }
    
        const cursos = await Curso.findAll({
            where: params
        })
    
        res.json(cursos)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível listar todos os cursos' })
    }
})


routes.delete('/cursos/:id', (req,res) => {
    const {id} =  req.params

    Curso.destroy({
        where: {
            id: id
        }
    }) // DELETE cursos from cursos where id = 1
  
    res.status(204).json({})
})


routes.put('/cursos/:id', async (req, res) => {
    const { id } = req.params

    const curso = await Curso.findByPk(id)

    if(!curso) {
        return res.status(404).json({mensagem: 'Curso não encontrado'})
    }

    curso.update(req.body)

    await curso.save()

    res.json(curso)
})

module.exports = routes
