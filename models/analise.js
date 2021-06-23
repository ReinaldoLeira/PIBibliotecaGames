'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Analise extends Model {
  
    static associate(models) {
      this.belongsTo (models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id'
      }),
      this.belongsTo(models.Jogo, {
        foreignKey: 'idJogos',
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
    idJogos: {
      type: DataTypes.BIGINT,
      references : {
        model: 'jogos'
      }
    },
    idPerfis: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }
    },
    blocked: DataTypes.BOOLEAN(1)
  }, {
    sequelize,
    modelName: 'Analise',
  });
  return Analise;
};