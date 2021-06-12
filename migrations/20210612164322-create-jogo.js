'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('jogos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      nome: {
        type: Sequelize.STRING
      },
      desenvolvedor: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_de_lancamento: {
        type: Sequelize.STRING
      },
      capa: {
        type: Sequelize.STRING
      },
      validado: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('jogos');
  }
};