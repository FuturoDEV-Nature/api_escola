const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Aluno = connection.define('alunos', {
    nome: {
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING
    }
})

module.exports = Aluno


