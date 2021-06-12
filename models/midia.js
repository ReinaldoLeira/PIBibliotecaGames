'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Midia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Midia.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true
    },
    tipo: DataTypes.ENUM('IMAGEM','VIDEO'),
    path: DataTypes.STRING(150),
    users_id: DataTypes.BIGINT,
    jogos_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Midia',
  });
  return Midia;
};