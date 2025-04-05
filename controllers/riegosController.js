const RiegosService = require("../services/riegosService");

class RiegosController {
    // 1.Obtener todos los riegos
  static async getAllRiegos(req, res) {
    try {
      const riegos = await RiegosService.getAllRiegos();
      res.json(riegos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 2.Obtener un riego por ID
  static async getRiegoById(req, res) {
    try {
      const riego = await RiegosService.getRiegoById(req.params.id);
      if (!riego) {
        return res.status(404).json({ error: "Riego no encontrado" });
      }
      res.json(riego);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 3.Crear un nuevo riego
  static async createRiego(req, res) {
    try {
      const riego = await RiegosService.createRiego(req.body);
      res.status(201).json(riego);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
    // 4.Actualizar un riego por ID
  static async updateRiego(req, res) {
    try {
      const riego = await RiegosService.updateRiego(req.params.id, req.body);
      res.json(riego);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
    // 5.Eliminar un riego por ID
  static async deleteRiego(req, res) {
    try {
      await RiegosService.deleteRiego(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 6.Obtener riegos por cultivo ID
  static async getRiegosByCultivoId(req, res) {
    try {
      const riegos = await RiegosService.getRiegosByCultivoId(req.params.id);
      res.json(riegos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
    // 7.Modificar el riego por cultivo ID  
    static async updateRiegoByCultivoId(req, res) {
        try {
            const riego = await RiegosService.updateRiegoByCultivoId(req.params.id, req.body);
            res.json(riego);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // 8.Obtener riegos por fecha
    static async getRiegosByFecha(req, res) {
        try {
            const riegos = await RiegosService.getRiegosByFecha(req.params.fecha);
            res.json(riegos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    // 9.Obtener riegos por cantidad de agua    
    static async getRiegosByCantidadAgua(req, res) {
        try {
            const riegos = await RiegosService.getRiegosByCantidadAgua(req.params.cantidadAgua);
            res.json(riegos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = RiegosController;