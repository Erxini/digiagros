const sequelize = require("../db");
const { Model, DataTypes } = require('sequelize');

class Suelo extends Model { }

Suelo.init({
  id_suelo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_cultivo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'cultivo',
      key: 'id_cultivo',
    },
  },
  tipo_suelo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  ph: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nutrientes: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  humedad: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'suelo',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Suelo;