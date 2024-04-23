const Aluno = require("../models/Aluno")
const Matricula = require("../models/Matricula")

class MatriculaController {

    async cadastrar(req, res) {
        const curso_id = req.body.curso_id // id do curso
        const aluno_id = req.body.aluno_id // id do aluno

        if (!curso_id || !aluno_id) {
            return res
                .status(400)
                .json({ mensagem: 'O ID do aluno e do curso são obrigatórios' })
        }

        const aluno = await Aluno.findByPk(aluno_id)
        if (!aluno) return res.status(404).json({ messagem: 'O aluno não existe' })

        /* Validar se o id do curso existe */

        /* Validar se já existe o mesmo curso para o mesmo aluno */

        const matricula = await Matricula.create({
            curso_id: curso_id,
            aluno_id: aluno_id
        })

        res.status(201).json(matricula)
    }

}

module.exports = new MatriculaController()