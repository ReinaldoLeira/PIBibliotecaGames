'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.hasOne(models.Perfil, {
        foreignKey: 'perfis_id',
        targetKey: 'id'
      }),
      this.hasMany(models.Noticia, {
        foreignKey: 'users_id',
        targetKey: 'id'
      })
    }
  };
  User.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement:true
    },
    usuario: DataTypes.STRING(100),
    senha: DataTypes.INTEGER,
    email: DataTypes.STRING(100),
    blocked: DataTypes.BOOLEAN(1),
    role: DataTypes.BOOLEAN(1)
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};