const UsuariosService = require("../services/usuariosServices");

class UsuariosController {
    // 1.Obtener todos los usuarios
  static async getAllUsuarios(req, res) {
    try {
      const usuarios = await UsuariosService.getAllUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 2.Obtener un usuario por ID
  static async getUsuarioById(req, res) {
    try {
      const usuario = await UsuariosService.getUsuarioById(req.params.id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 3.Crear un nuevo usuario
  static async createUsuario(req, res) {
    try {
      const usuario = await UsuariosService.createUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
    // 4.Actualizar un usuario por ID 
  static async updateUsuario(req, res) {
    try {
      const usuario = await UsuariosService.updateUsuario(req.params.id, req.body);
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
    // 5.Obtener un usuario por nombre y contraseña
  static async getUsuarioByNombreAndPassword(req, res) {
    try {
      const usuario = await UsuariosService.getUsuarioByNombreAndPassword(req.body.nombre, req.body.contrasena);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 6.Eliminar un usuario por ID
  static async deleteUsuario(req, res) {
    try {
      await UsuariosService.deleteUsuario(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsuariosController;