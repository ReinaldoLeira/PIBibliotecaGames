'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bibliotecaJogo extends Model {

    static associate(models) {
      this.belongsTo(models.Biblioteca, {
        foreignKey: 'idBibliotecas',
        targetKey : 'id'
      }),
      this.belongsTo(models.Jogo, {
        foreignKey: 'idJogos',
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
    idBibliotecas: {
      type: DataTypes.BIGINT,
      references: {
        model: 'bibliotecas'      
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
    modelName: 'bibliotecaJogo',
    tableName: 'bibliotecasJogos'
  });
  return bibliotecaJogo;
};