'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogo extends Model {

    static associate(models) {
      this.hasMany(models.Analise, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      }),
      this.hasMany(models.bibliotecaJogo, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      }),
      this.hasMany(models.Midia, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      }),
      this.hasMany(models.jogoGenero, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      }),
      this.hasMany(models.jogoPlataforma, {
        foreignKey: 'jogos_id',
        targetKey: 'id'
      })
    
    }
  };
  Jogo.init({
    id: {

      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
      
    },

    nome: DataTypes.STRING(150),
    desenvolvedor: DataTypes.STRING(100),
    descricao: DataTypes.STRING(1000),
    data_de_lancamento: DataTypes.STRING(10),
    capa: DataTypes.STRING(100),
    validado: DataTypes.BOOLEAN(1),
    createdBy: DataTypes.STRING(100)
    
  }, {

    sequelize,
    modelName: 'Jogo',

  });

  return Jogo;
};