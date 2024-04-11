'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
      },
      nome: {
       allowNull: false,
       type: Sequelize.STRING
     },
      duracao_horas: {
       allowNull: false,
       type: Sequelize.INTEGER
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

    await queryInterface.dropTable('cursos');
  }
};
