'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bibliotecaJogo extends Model {

    static associate(models) {
      this.belongsTo(models.Bibioteca, {
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
        model: 'Biblioteca'      
      }
    },
    jogos_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Jogo'
      }
    }
    
  }, {
    sequelize,
    modelName: 'bibliotecaJogo',
    tableName: 'bibliotecasJogos'
  });
  return bibliotecaJogo;
};