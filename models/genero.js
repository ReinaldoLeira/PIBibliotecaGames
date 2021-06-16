'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {

    static associate(models) {
      this.hasMany(models.jogoGenero, {
        foreignKey: 'generos_id',
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