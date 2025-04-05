const CultivosService = require("../services/cultivosServices");

class CultivosController {
    // 1.Obtener todos los cultivos
  static async getAllCultivos(req, res) {
    try {
      const cultivos = await CultivosService.getAllCultivos();
      res.json(cultivos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 2.Obtener un cultivo por ID
  static async getCultivoById(req, res) {
    try {
      const cultivo = await CultivosService.getCultivoById(req.params.id);
      if (!cultivo) {
        return res.status(404).json({ error: "Cultivo no encontrado" });
      }
      res.json(cultivo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 3.Crear un nuevo cultivo
  static async createCultivo(req, res) {
    try {
      const cultivo = await CultivosService.createCultivo(req.body);
      res.status(201).json(cultivo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
    // 4.Actualizar un cultivo por ID
  static async updateCultivo(req, res) {
    try {
      const cultivo = await CultivosService.updateCultivo(req.params.id, req.body);
      res.json(cultivo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
    // 5.Eliminar un cultivo por ID
  static async deleteCultivo(req, res) {
    try {
      await CultivosService.deleteCultivo(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CultivosController;