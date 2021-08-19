'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      this.belongsTo(models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id',
        onDelete: 'cascade'
      })
    }
  };
  Post.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: DataTypes.STRING(300),
    titulo: DataTypes.STRING(45),
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