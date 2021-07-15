'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biblioteca extends Model {

    static associate(models) {
      this.belongsTo(models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id'
      }),
      this.belongsToMany(models.Jogo, {
        through: 'bibliotecasJogos',
        as: 'jogos',
        foreignKey: 'idBibliotecas',
        otherKey: 'idJogos',
      })
    }
  };
  Biblioteca.init({

    id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
    obtido: DataTypes.BOOLEAN(1),
    idPerfis: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }

  }
    
  }, {
    sequelize,
    modelName: 'Biblioteca',
  });
  return Biblioteca;
};