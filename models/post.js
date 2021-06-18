'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      this.belongsTo (models.Perfil, {
        foreignKey: 'perfis_id',
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
    perfis_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }
    },
    perfis_users_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }
    }
    
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};