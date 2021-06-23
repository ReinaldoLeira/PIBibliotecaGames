'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.belongsTo(models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id'
      }),
      this.hasMany(models.Noticia, {
        foreignKey: 'idUsers',
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
    role: DataTypes.ENUM('ADMIN', 'USER'),
    idPerfil: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }
    }
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};