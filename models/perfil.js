'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {

    static associate(models) {
      this.hasOne(models.User, {
        foreignKey: 'idPerfis',
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
    sobre: DataTypes.STRING(300),
    foto: DataTypes.STRING(500),
    blocked: DataTypes.BOOLEAN(1),
    instagram: DataTypes.STRING(150),
    facebook: DataTypes.STRING(150),
    twitter: DataTypes.STRING(150),
    usuario: {
      type: DataTypes.STRING(45),
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Perfil',
    tableName: 'perfis'
  });
  return Perfil;
};