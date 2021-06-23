'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {

    static associate(models) {
      this.hasOne(models.User, {
        foreignKey: 'idUsers',
        targetKey: 'id'
      }),
      this.hasMany(models.Post, {
        foreignKey: 'idPerfis',
        targetKey: 'id'
      }),
      this.hasMany(models.Analise,{
        foreignKey: 'idPerfis',
        targetKey: 'id'
      }),
      this.hasMany(models.Midia, {
        foreignKey: 'idPerfis',
        targetKey: 'id'
      }),
      this.hasOne(models.Biblioteca,{
        foreignKey: 'idPerfis',
        targetKey: 'id'
      }),
      this.hasMany(models.Noticia,{
        foreignKey: 'idPerfis',
        targetKey: 'id'
      });

    }
  };
  Perfil.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement: true
    },
    sobre: DataTypes.STRING(1000),
    foto: DataTypes.STRING(100),
    blocked: DataTypes.BOOLEAN(1)
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  return Perfil;
};