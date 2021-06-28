'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JogoPlataforma extends Model {
  
    static associate(models) {
      this.belongsTo(models.Jogo, {
        foreignKey: 'idJogos',
        targetKey: 'id'
      }),
      this.belongsTo(models.Plataforma, {
        foreignKey: 'idPlataformas',
        targetKey: 'id'
      })
    }
  };
  JogoPlataforma.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey:true,
      autoIncrement: true
    },
    idJogos: {
      type: DataTypes.BIGINT,
      references: {
        model: 'jogos'
      }
    },
    idPlataformas: {
      type:  DataTypes.BIGINT,
      references: {
        model: 'plataformas'
      }
    }
  }, {
    sequelize,
    modelName: 'JogoPlataforma',
    tableName: 'jogosplataformas'
  });
  return JogoPlataforma;
};