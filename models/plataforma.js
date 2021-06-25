'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plataforma extends Model {

    static associate(models) {
      this.belongsToMany(models.Jogo, {
        through: 'JogosGeneros',
        as: 'jogos',
        foreignKey: 'idPlataformas',
        otherKey: 'idJogos',
      })
    }
  };
  Plataforma.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Plataforma',
  });
  return Plataforma;
};