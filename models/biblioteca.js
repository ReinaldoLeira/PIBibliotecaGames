'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biblioteca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Biblioteca.init({

    id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
    jogos_id: DataTypes.BIGINT,
    users_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Biblioteca',
  });
  return Biblioteca;
};