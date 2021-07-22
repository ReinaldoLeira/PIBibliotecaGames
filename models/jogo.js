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
      this.belongsToMany(models.Genero, {
        through: 'jogosGeneros' ,
        as: 'genero',
        foreignKey: 'idJogos',
        targetKey: 'id'

      }),
      this.hasMany(models.JogoPlataforma, {
        
        foreignKey: 'idJogos',
       targetKey: 'id'
      }),
      this.belongsToMany(models.Plataforma, {
        through: 'jogosPlataformas' ,
        as: 'plataforma',
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

    nome: DataTypes.STRING(120),
    desenvolvedor: DataTypes.STRING(120),
    descricao: DataTypes.STRING(500),
    lancamento: DataTypes.STRING(10),
    capa: DataTypes.STRING(500),
    validado: DataTypes.TINYINT(1),
    createdBy: DataTypes.STRING(50)
    
  }, {

    sequelize,
    modelName: 'Jogo',

  });

  return Jogo;
};