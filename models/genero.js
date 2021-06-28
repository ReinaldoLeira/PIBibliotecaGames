'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {

    static associate(models) {
      this.hasMany(models.JogoGenero, {
        foreignKey: 'idGeneros',
        targetKey: 'id'
      })
    }
  };
  Genero.init({
    id: {

    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true

    },

    nome: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};