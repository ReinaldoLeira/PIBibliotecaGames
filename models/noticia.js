'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {

    static associate(models) {
      this.belongsTo(models.Perfil, {
        foreignKey: 'idPerfis',
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
    //autor:DataTypes.STRING(50),
    titulo:DataTypes.STRING(100),
    //subTitulo:DataTypes.STRING(50),
    descricao: DataTypes.STRING(1000),
    idPerfis: {
      type: DataTypes.BIGINT,
      references: {
        model:'perfis'
      }
    },
    capa: DataTypes.STRING(500)
  }, {
    sequelize,
    modelName: 'Noticia',
    tableName: 'noticias'
  });
  return Noticia;
};