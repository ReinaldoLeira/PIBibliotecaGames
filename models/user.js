'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.belongsTo(models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id',
        onDelete: 'cascade'
      })      
    }
  };
  User.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement:true
    },
    senha: DataTypes.STRING(100),
    email: DataTypes.STRING(45),
    blocked: DataTypes.BOOLEAN(1),
    role: DataTypes.ENUM('ADMIN', 'USER'),
    idPerfis: {
      type: DataTypes.BIGINT,
      onDelete: 'CASCADE',
      references: {
        model: 'perfis'
      }
    }
    
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  return User;
};