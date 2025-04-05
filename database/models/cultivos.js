const sequelize = require("../db");
const { Model, DataTypes } = require('sequelize');

class Cultivo extends Model { }

Cultivo.init({
  id_cultivo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuario',
      key: 'id_usuario',
    },
  },
  tipo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  fecha_siembra: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_cosecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'cultivo',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Cultivo;