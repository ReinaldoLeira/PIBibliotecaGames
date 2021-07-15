'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BibliotecaJogo extends Model {

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
  BibliotecaJogo.init({

    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    plataforma: DataTypes.STRING(50),
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
    modelName: 'BibliotecaJogo',
    tableName: 'bibliotecasJogos'
  });
  return BibliotecaJogo;
};