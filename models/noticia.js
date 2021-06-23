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
    titulo:DataTypes.STRING(50),
    descricao: DataTypes.STRING(100),
    idPerfis: {
      type: DataTypes.BIGINT,
      references: {
        model:'perfis'
      }
    },
    capa: DataTypes.STRING(150)
  }, {
    sequelize,
    modelName: 'Noticia',
  });
  return Noticia;
};