'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {

    static associate(models) {
      this.belongsToMany(models.Jogo, {
        through: 'JogosGeneros',
        as: 'Jogos',
        foreignKey: 'idGeneros',
        otherKey: 'idJogos',
      })
    }
  };
  Genero.init({
    id: {

    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true

    },

    nome: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};