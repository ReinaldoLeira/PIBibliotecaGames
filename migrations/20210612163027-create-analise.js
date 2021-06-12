'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('analises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      analise: {
        type: Sequelize.STRING
      },
      nota: {
        type: Sequelize.NUMBER
      },
      jogos_id: {
        type: Sequelize.STRING
      },
      users_id: {
        type: Sequelize.NUMBER
      },
      blocked: {
        type: Sequelize.NUMBER
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
    await queryInterface.dropTable('analises');
  }
};