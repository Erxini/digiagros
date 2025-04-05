const express = require("express");
const Produccion = require("../database/models/produccion");

const router = express.Router();

// 1.Obtener toda la producción
router.get("/", async (req, res) => {
  try {
    const produccion = await Produccion.findAll();
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2.Obtener un registro de producción por ID
router.get("/:id", async (req, res) => {
  try {
    const produccion = await Produccion.findByPk(req.params.id);
    if (!produccion) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3.Crear un nuevo registro de producción
router.post("/", async (req, res) => {
  try {
    const produccion = await Produccion.create(req.body);
    res.status(201).json(produccion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4.Actualizar un registro de producción por ID
router.put("/:id", async (req, res) => {
  try {
    const produccion = await Produccion.findByPk(req.params.id);
    if (!produccion) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    await produccion.update(req.body);
    res.json(produccion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// 5.Obtener un registro de producción por cultivo y suelo
router.get("/cultivo/:id/suelo/:sueloId", async (req, res) => {
  try {
    const produccion = await Produccion.findOne({
      where: {
        id_cultivo: req.params.id,
        id_suelo: req.params.sueloId,
      },
    });
    if (!produccion) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 6.Eliminar un registro de producción por ID
router.delete("/:id", async (req, res) => {
  try {
    const produccion = await Produccion.findByPk(req.params.id);
    if (!produccion) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    await produccion.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7.Obtener producción por cultivo
router.get("/cultivo/:id", async (req, res) => {
  try {
    const produccion = await Produccion.findAll({
      where: { id_cultivo: req.params.id },
    });
    if (!produccion.length) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 8.Obtener producción por fecha
router.get("/fecha/:fecha", async (req, res) => {
  try {
    const produccion = await Produccion.findAll({
      where: { fecha: req.params.fecha },
    });
    if (!produccion.length) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 9.Obtener producción por calidad
router.get("/calidad/:calidad", async (req, res) => {
  try {
    const produccion = await Produccion.findAll({
      where: { calidad: req.params.calidad },
    });
    if (!produccion.length) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 10.Obtener producción por cantidad
router.get("/cantidad/:cantidad", async (req, res) => {
  try {
    const produccion = await Produccion.findAll({
      where: { cantidad: req.params.cantidad },
    });
    if (!produccion.length) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 11.Obtener producción por calidad y cultivo
router.get("/cultivo/:id/cantidad/:cantidad", async (req, res) => {
  try {
    const produccion = await Produccion.findAll({
      where: {
        id_cultivo: req.params.id,
        cantidad: req.params.cantidad,
      },
    });
    if (!produccion.length) {
      return res.status(404).json({ error: "Producción no encontrada" });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener producción por calidad y fecha?

module.exports = router;