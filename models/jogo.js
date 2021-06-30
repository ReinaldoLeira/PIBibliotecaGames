'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogo extends Model {

    static associate(models) {
      this.hasMany(models.Analise, {
        foreignKey: 'idJogos',
        targetKey: 'id'
      }),
      this.hasMany(models.BibliotecaJogo, {
       foreignKey: 'idJogos',
       targetKey: 'id'      
      }),
      this.hasMany(models.Midia, {
        foreignKey: 'idJogos',
        targetKey: 'id'
      }),
      this.hasMany(models.JogoGenero, {

        foreignKey: 'idJogos',
        targetKey: 'id'

      }),
      this.hasMany(models.JogoPlataforma, {
        
        foreignKey: 'idJogos',
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
    lancamento: DataTypes.STRING(10),
    capa: DataTypes.STRING(100),
    validado: DataTypes.TINYINT(1),
    createdBy: DataTypes.STRING(100)
    
  }, {

    sequelize,
    modelName: 'Jogo',

  });

  return Jogo;
};