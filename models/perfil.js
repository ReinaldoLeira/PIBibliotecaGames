'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'users_id',
        targetKey: 'id'
      }),
      this.hasMany(models.Post, {
        foreignKey: 'perfis_id',
        targetKey: 'id'
      }),
      this.hasMany(models.Analise,{
        foreignKey: 'perfis_id',
        targetKey: 'id'
      }),
      this.hasMany(models.Midia, {
        foreignKey: 'perfis_id',
        targetKey: 'id'
      }),
      this.hasOne(models.Biblioteca,{
        foreignKey: 'perfis_id',
        targetKey: 'id'
      })



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
    blocked: DataTypes.BOOLEAN(1),
    users_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'users'
      }
    }
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  return Perfil;
};