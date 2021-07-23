'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('noticia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      descricao: {
        type: Sequelize.STRING
      },
      users_id: {
        type: Sequelize.NUMBER
      },
      /* autor: {
        type: Sequelize.STRING
      }, */
      titulo: {
        type: Sequelize.STRING
      },
      /* subTitulo: {
        type: Sequelize.STRING
      }, */
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
    await queryInterface.dropTable('noticia');
  }
};