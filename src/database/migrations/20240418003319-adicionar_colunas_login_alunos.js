'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos', 'email', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.addColumn('alunos', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('alunos', 'email');

    await queryInterface.removeColumn('alunos', 'password');

  }
};
