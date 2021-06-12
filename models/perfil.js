'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Perfil.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true
    },
    nick: DataTypes.STRING(50),
    sobre: DataTypes.STRING(100),
    foto: DataTypes.STRING(100),
    blocked: DataTypes.BOOLEAN(1)
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  return Perfil;
};