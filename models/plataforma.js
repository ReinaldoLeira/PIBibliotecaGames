'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plataforma extends Model {

    static associate(models) {
      this.hasMany(models.jogoPlataforma, {
        foreignKey: 'plataformas_id',
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