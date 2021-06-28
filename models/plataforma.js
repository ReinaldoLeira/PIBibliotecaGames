'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plataforma extends Model {

    static associate(models) {
      this.hasMany(models.JogoPlataforma, {
        foreignKey: 'idPlataformas',
        targetKey: 'id'
      })
    }
  };
  Plataforma.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Plataforma',
  });
  return Plataforma;
};