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
      this.belongsToMany(models.Biblioteca, {
        through: 'bibliotecasJogos',
        as: 'bibliotecas',
        foreignKey: 'idJogos',
        otherKey: 'idBibliotecas',        
      }),
      this.hasMany(models.Midia, {
        foreignKey: 'idJogos',
        targetKey: 'id'
      }),
      this.belongsToMany(models.Genero, {
        through: 'JogosGeneros',
        as: 'generos',
        foreignKey: 'idJogos',
        otherKey: 'idGeneros',
      }),
      this.belongsToMany(models.Plataformas, {
        through: 'JogosGeneros',
        as: 'plataforas',
        foreignKey: 'idJogos',
        otherKey: 'idPlataformas',
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
    validado: DataTypes.BOOLEAN(1),
    createdBy: DataTypes.STRING(100)
    
  }, {

    sequelize,
    modelName: 'Jogo',

  });

  return Jogo;
};