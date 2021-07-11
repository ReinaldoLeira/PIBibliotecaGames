'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Midia extends Model {
 
    static associate(models) {
      this.belongsTo(models.Jogo, {
        foreignKey: 'idJogos',
        targetKey: 'id'
      }),
      this.belongsTo(models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id'
      })
    }
  };
  Midia.init({
    id: {
      type:DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement: true
    },
    tipo: DataTypes.ENUM('IMAGEM','VIDEO'),
    path: DataTypes.STRING(150),
    idPerfis: {
      type: DataTypes.BIGINT,
      references: {
        model: 'perfis'
      }
    },
    idJogos: {
      type: DataTypes.BIGINT,
      references: {
        model: 'jogos'
      }

    }
    
  }, {
    sequelize,
    modelName: 'Midia',
    tableName: 'midias'
  });
  return Midia;
};