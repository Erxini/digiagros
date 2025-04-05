const sequelize = require("../db");
const { Model, DataTypes } = require('sequelize');

class Produccion extends Model { }

Produccion.init({
  id_produccion: {
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
  cantidad: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  calidad: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'produccion',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Produccion;