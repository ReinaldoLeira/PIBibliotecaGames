'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bibliotecaJogo extends Model {

    static associate(models) {
      this.belongsTo(models.Biblioteca, {
        foreignKey: 'bibliotecas_id',
        targetKey : 'id'
      }),
      this.belongsTo(models.Jogo, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      })
    }
  };
  bibliotecaJogo.init({

    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    plataforma: DataTypes.STRING(100),
    biblioteca_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'bibliotecas'      
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
    modelName: 'bibliotecaJogo',
    tableName: 'bibliotecasJogos'
  });
  return bibliotecaJogo;
};