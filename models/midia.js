'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Midia extends Model {
 
    static associate(models) {
      this.belongsTo(models.Jogo, {
        foreignKey: 'idJogos',
        targetKey: 'id',
        onDelete: 'cascade'
      }),
      this.belongsTo(models.Perfil, {
        foreignKey: 'idPerfis',
        targetKey: 'id',
        onDelete: 'cascade'
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
    path: DataTypes.STRING(500),
    idPerfis: {
      type: DataTypes.BIGINT,
      onDelete: 'CASCADE',
      references: {
        model: 'perfis'
      }
    },
    idJogos: {
      type: DataTypes.BIGINT,
      references: {
        model: 'jogos'
      }

    },
    titulo: DataTypes.STRING(30)
    
  }, {
    sequelize,
    modelName: 'Midia',
    tableName: 'midias'
  });
  return Midia;
};