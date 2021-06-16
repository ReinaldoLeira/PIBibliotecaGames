'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bibliotecaJogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bibliotecaJogo.init({

    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    plataforma: DataTypes.STRING(100),
    biblioteca_id: {
      type: DataTypes.BIGINT,
      references: {
      
      }
    },
    jogos_id: DataTypes.BIGINT
    
  }, {
    sequelize,
    modelName: 'bibliotecaJogo',
  });
  return bibliotecaJogo;
};