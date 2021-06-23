'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      this.belongsTo (models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id'
      })
    }
  };
  Post.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: DataTypes.STRING(100),
    titulo: DataTypes.STRING(100),
    idPerfis: {
      type: DataTypes.BIGINT,
      references: {
        model:'perfis'
      }
    }

  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};