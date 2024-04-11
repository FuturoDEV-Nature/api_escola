'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('matriculas', {
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
      },
      aluno_id: {
       allowNull: false,
       type: Sequelize.INTEGER,
       references: {
         model: 'alunos',
         key: 'id'
       },
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE'
     },
      curso_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cursos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
     },
      createdAt: {
       allowNull: false,
       type: Sequelize.DATE
     },
      updatedAt: {
       allowNull: false,
       type: Sequelize.DATE
     }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('matriculas');
  }
};
