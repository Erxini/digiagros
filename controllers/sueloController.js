const SueloService = require("../services/sueloServices");

class SueloController {
  // 1. Obtener todos los registros de suelo
  static async getAllSuelos(req, res) {
    try {
      const suelos = await SueloService.getAllSuelos();
      res.json(suelos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 2. Obtener un registro de suelo por ID
  static async getSueloById(req, res) {
    try {
      const suelo = await SueloService.getSueloById(req.params.id);
      if (!suelo) {
        return res.status(404).json({ error: "Suelo no encontrado" });
      }
      res.json(suelo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 3. Crear un nuevo registro de suelo
  static async createSuelo(req, res) {
    try {
      const suelo = await SueloService.createSuelo(req.body);
      res.status(201).json(suelo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // 4. Modificar un registro de suelo por ID
  static async updateSuelo(req, res) {
    try {
      const suelo = await SueloService.updateSuelo(req.params.id, req.body);
      res.json(suelo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // 5. Obtener un registro por cultivo y suelo
  static async getSueloByCultivoAndSuelo(req, res) {
    try {
      const suelo = await SueloService.getSueloByCultivoAndSuelo(
        req.params.id,
        req.params.sueloId
      );
      if (!suelo) {
        return res.status(404).json({ error: "Suelo no encontrado" });
      }
      res.json(suelo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 6. Eliminar un registro de suelo por ID
  static async deleteSuelo(req, res) {
    try {
      await SueloService.deleteSuelo(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SueloController;