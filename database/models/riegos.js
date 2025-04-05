const sequelize = require("../db");
const { Model, DataTypes } = require('sequelize');

class Riego extends Model { }

Riego.init({
  id_riego: {
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
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cantidad_agua: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  observaciones: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'riego',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Riego;