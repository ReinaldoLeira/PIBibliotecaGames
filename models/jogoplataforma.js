'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JogoPlataforma extends Model {
  
    static associate(models) {
      this.belongsTo(models.Jogo, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      }),
      this.belongsTo(models.Plataforma, {
        foreignKey: 'plataformas_id',
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
    jogos_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Jogo'
      }
    },
    plataformas_id: {
      type:  DataTypes.BIGINT,
      references: {
        model: 'Plataforma'
      }
    }
  }, {
    sequelize,
    modelName: 'jogoPlataforma',
    tableName: 'jogosPlataformas'
  });
  return JogoPlataforma;
};