const Usuario = require("../database/models/usuarios");

class UsuariosService {
    // 1.Obtener todos los usuarios
  static async getAllUsuarios() {
    return await Usuario.findAll();
  }
    // 2.Obtener un usuario por ID
  static async getUsuarioById(id) {
    return await Usuario.findByPk(id);
  }
    // 3.Crear un nuevo usuario
  static async createUsuario(data) {
    return await Usuario.create(data);
  }
    // 4.Modificar un usuario por ID
  static async updateUsuario(id, data) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error("Usuario no encontrado");
    return await usuario.update(data);
  }
    // 5.Obtener un usuario por nombre y contraseña
  static async getUsuarioByNombreAndPassword(nombre, contrasena) {
    return await Usuario.findOne({
      where: {
        nombre: nombre,
        contrasena: contrasena,
      },
    });
  }
    // 6.Eliminar un usuario por ID
  static async deleteUsuario(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error("Usuario no encontrado");
    return await usuario.destroy();
  }
}

module.exports = UsuariosService;