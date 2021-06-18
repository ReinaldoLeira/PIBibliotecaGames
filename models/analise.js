'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Analise extends Model {
  
    static associate(models) {
      this.belongsTo (models.Perfil, {
        foreignKey: 'perfis_id',
        targetKey: 'id'
      }),
      this.belongsTo(models.Jogo, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      })
    }
  };
  Analise.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true

    },
    titulo: DataTypes.STRING(100),
    analise: DataTypes.STRING(1000),
    nota: DataTypes.BOOLEAN(1),
    jogos_id: {
      type: DataTypes.BIGINT,
      references : {
        model: 'jogos'
      }
    },
    perfis_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }
    },
    blocked: DataTypes.BOOLEAN(1),
    perfis_users_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'users'
      }
    }
  }, {
    sequelize,
    modelName: 'Analise',
  });
  return Analise;
};