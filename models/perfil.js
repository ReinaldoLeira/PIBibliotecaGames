'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {

    static associate(models) {
      this.belongsTo(models.Perfil, {
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
    nick: DataTypes.STRING(50),
    sobre: DataTypes.STRING(1000),
    foto: DataTypes.STRING(100),
    blocked: DataTypes.BOOLEAN(1),
    perfis_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'User'
      }
    }
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  return Perfil;
};