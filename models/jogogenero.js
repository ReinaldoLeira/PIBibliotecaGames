'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogogenero extends Model {

    static associate(models) {
      this.belongsTo(models.Jogo, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      }),
      this.belongsTo(models.Genero, {
        foreignKey: 'generos_id',
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
    generos_id: {
      type:  DataTypes.BIGINT,
      references: {
        model: 'generos'
      }
    },
    jogos_id: {
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