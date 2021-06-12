'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey:true
    },
    usuario: DataTypes.STRING(100),
    senha: DataTypes.INTEGER,
    email: DataTypes.STRING(100),
    blocked: DataTypes.BOOLEAN(1),
    role: DataTypes.BOOLEAN(1),
    perfis_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};