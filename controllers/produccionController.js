const ProduccionService = require("../services/produccionServices");

class ProduccionController {
  // 1. Obtener toda la producción
  static async getAllProduccion(req, res) {
    try {
      const produccion = await ProduccionService.getAllProduccion();
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 2. Obtener un registro de producción por ID
  static async getProduccionById(req, res) {
    try {
      const produccion = await ProduccionService.getProduccionById(req.params.id);
      if (!produccion) {
        return res.status(404).json({ error: "Producción no encontrada" });
      }
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 3. Crear un nuevo registro de producción
  static async createProduccion(req, res) {
    try {
      const produccion = await ProduccionService.createProduccion(req.body);
      res.status(201).json(produccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // 4. Actualizar un registro de producción por ID
  static async updateProduccion(req, res) {
    try {
      const produccion = await ProduccionService.updateProduccion(req.params.id, req.body);
      res.json(produccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // 5. Obtener un registro de producción por cultivo y suelo
  static async getProduccionByCultivoAndSuelo(req, res) {
    try {
      const produccion = await ProduccionService.getProduccionByCultivoAndSuelo(
        req.params.id,
        req.params.sueloId
      );
      if (!produccion) {
        return res.status(404).json({ error: "Producción no encontrada" });
      }
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 6. Eliminar un registro de producción por ID
  static async deleteProduccion(req, res) {
    try {
      await ProduccionService.deleteProduccion(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 7. Obtener producción por cultivo
  static async getProduccionByCultivo(req, res) {
    try {
      const produccion = await ProduccionService.getProduccionByCultivo(req.params.id);
      if (!produccion.length) {
        return res.status(404).json({ error: "Producción no encontrada" });
      }
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 8. Obtener producción por fecha
  static async getProduccionByFecha(req, res) {
    try {
      const produccion = await ProduccionService.getProduccionByFecha(req.params.fecha);
      if (!produccion.length) {
        return res.status(404).json({ error: "Producción no encontrada" });
      }
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 9. Obtener producción por calidad
  static async getProduccionByCalidad(req, res) {
    try {
      const produccion = await ProduccionService.getProduccionByCalidad(req.params.calidad);
      if (!produccion.length) {
        return res.status(404).json({ error: "Producción no encontrada" });
      }
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 10. Obtener producción por cantidad
  static async getProduccionByCantidad(req, res) {
    try {
      const produccion = await ProduccionService.getProduccionByCantidad(req.params.cantidad);
      if (!produccion.length) {
        return res.status(404).json({ error: "Producción no encontrada" });
      }
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // 11. Obtener producción por calidad y cultivo
  static async getProduccionByCultivoAndCantidad(req, res) {
    try {
      const produccion = await ProduccionService.getProduccionByCultivoAndCantidad(
        req.params.id,
        req.params.cantidad
      );
      if (!produccion.length) {
        return res.status(404).json({ error: "Producción no encontrada" });
      }
      res.json(produccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProduccionController;