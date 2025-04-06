const sequelize = require("../db");

const { Model, DataTypes } = require('sequelize');

class Usuario extends Model { }

//usuario: id_suario, nombre, email, password, rol

Usuario.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre de usuario no puede ser nulo",
            },
            len: {
                args: [1, 30],
                msg: "El nombre del usuario debe tener entre 1 y 30 caracteres",
            },
            isAlpha: {
                args: true,
                msg: "El nombre del usuario solo puede contener letras",
            }
        }
  },
  email: {
    type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El email de usuario no puede ser nulo",
            },
            isEmail: {
                msg: "El email de usuario no es válido"
            },
            len: {
                args: [1, 100],
                msg: "El email de usuario debe tener entre 1 y 100 caracteres"
            }
        }
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
        notNull: {
            msg: "La contraseña de usuario no puede ser nullo"
        },
        len: {
            args: [1, 200],
            msg: "La contraseña de usuario debe tener entre 1 y 100 caracteres"
        },
    }
  },
  rol: {
    type: DataTypes.CHAR(),
    allowNull: false,
    validate: {
        notNull: {
            msg: "El rol del usuario no puede ser nulo"
        },
        len: {
            args: [1, 1],
            msg: "El rol del usuario debe tener 1 caracter"
        },
        isIn: {
        args: [['Admin', 'Tec', 'Agri']],
           msg: "El rol del usuario debe ser Admin, Tec o Agri"   
        }

    }
  },
}, {
  sequelize,
  modelName: 'usuario', 
  timestamps: false, 
  freezeTableName: true,
});

module.exports = Usuario;