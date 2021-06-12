'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogogenero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Jogogenero.init({
    id: {
    type:DataTypes.BIGINT,
    primaryKey: true
  },
    generos_id: DataTypes.BIGINT,
    jogos_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Jogogenero',
  });
  return Jogogenero;
};