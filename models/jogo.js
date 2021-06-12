'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Jogo.init({
    id: {

      type: DataTypes.BIGINT,
      primaryKey: true,
      
    },

    nome: DataTypes.STRING(150),
    desenvolvedor: DataTypes.STRING(100),
    descricao: DataTypes.STRING(1000),
    data_de_lancamento: DataTypes.STRING(10),
    capa: DataTypes.STRING(100),
    validado: DataTypes.BOOLEAN(1),
    createdBy: DataTypes.STRING(100)
    
  }, {

    sequelize,
    modelName: 'Jogo',

  });

  return Jogo;
};