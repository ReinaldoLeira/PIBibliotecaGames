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
      this.hasMany(models.bibliotecaJogo, {
        foreignKey: 'idBibliotecas',
        targetKey: 'id'
      })
    }
  };
  Biblioteca.init({

    id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
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