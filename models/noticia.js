'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Noticia.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true
    },
    titulo:DataTypes.STRING(50),
    descricao: DataTypes.STRING(100),
    users_id: DataTypes.BIGINT,
    capa: DataTypes.STRING(150)
  }, {
    sequelize,
    modelName: 'Noticia',
  });
  return Noticia;
};