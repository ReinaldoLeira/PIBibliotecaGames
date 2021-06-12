'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Analise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Analise.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true

    },
    titulo: DataTypes.STRING(100),
    analise: DataTypes.STRING(1000),
    nota: DataTypes.BOOLEAN(1),
    jogos_id: DataTypes.BIGINT,
    users_id: DataTypes.BIGINT,
    blocked: DataTypes.BOOLEAN(1)
  }, {
    sequelize,
    modelName: 'Analise',
  });
  return Analise;
};