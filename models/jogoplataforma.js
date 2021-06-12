'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JogoPlataforma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  JogoPlataforma.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey:true
    },
    jogos_id: DataTypes.BIGINT,
    plataformas_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'JogoPlataformas',
  });
  return JogoPlataforma;
};