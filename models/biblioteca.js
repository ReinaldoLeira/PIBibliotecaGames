'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biblioteca extends Model {

    static associate(models) {
      this.belongsTo(models.Perfil, {
        foreignKey: 'perfis_id',
        targetKey: 'id'
      }),
      this.hasMany(models.bibliotecaJogo, {
        foreignKey: 'biblioteca_id',
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
    perfis_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }
  },
    perfis_users_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'users'
      }
    }
  }, {
    sequelize,
    modelName: 'Biblioteca',
  });
  return Biblioteca;
};