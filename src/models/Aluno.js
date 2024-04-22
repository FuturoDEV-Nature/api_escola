const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Aluno = connection.define('alunos', {
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING,
    }
})

module.exports = Aluno


