'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogogenero extends Model {

    static associate(models) {
      this.belongsTo(models.Jogo, {
        foreignKey: 'idJogos',
        targetKey: 'id'
      }),
      this.belongsTo(models.Genero, {
        foreignKey: 'idGeneros',
        targetKey: 'id'
      })
    }
  };
  Jogogenero.init({
    id: {
    type:DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
    idGeneros: {
      type:  DataTypes.BIGINT,
      references: {
        model: 'generos'
      }
    },
    idJogos: {
      type: DataTypes.BIGINT,
      references: {
        model: 'jogos'
      }
    }
  }, {
    sequelize,
    modelName: 'jogoGenero',
    tableName: 'jogosGeneros'
  });
  return Jogogenero;
};