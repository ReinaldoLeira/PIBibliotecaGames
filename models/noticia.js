'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {

    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'users_id',
        targetKey: 'id'
      })
    }
  };
  Noticia.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement: true
    },
    titulo:DataTypes.STRING(50),
    descricao: DataTypes.STRING(100),
    users_id: {
      type: DataTypes.BIGINT,
      references: {
        model:'users'
      }
    },
    capa: DataTypes.STRING(150)
  }, {
    sequelize,
    modelName: 'Noticia',
  });
  return Noticia;
};