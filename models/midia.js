'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Midia extends Model {
 
    static associate(models) {
      this.belongsTo(models.Jogo, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      }),
      this.belongsTo(models.Perfil, {
        foreignKey: 'perfis_id',
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
    perfis_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Perfil'
      }
    },
    jogos_id: {
      type: DataTypes.BIGINT,
      references: 'Jogo'
    }
  }, {
    sequelize,
    modelName: 'Midia',
  });
  return Midia;
};