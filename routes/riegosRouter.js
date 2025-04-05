const express = require("express");
const Riego = require("../database/models/riegos");

const router = express.Router();

// 1.Obtener todos los riegos
router.get("/", async (req, res) => {
  try {
    const riegos = await Riego.findAll();
    res.json(riegos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2.Obtener un riego por ID
router.get("/:id", async (req, res) => {
  try {
    const riego = await Riego.findByPk(req.params.id);
    if (!riego) {
      return res.status(404).json({ error: "Riego no encontrado" });
    }
    res.json(riego);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3.Crear un nuevo riego
router.post("/", async (req, res) => {
  try {
    const riego = await Riego.create(req.body);
    res.status(201).json(riego);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4.Actualizar un riego por ID
router.put("/:id", async (req, res) => {
  try {
    const riego = await Riego.findByPk(req.params.id);
    if (!riego) {
      return res.status(404).json({ error: "Riego no encontrado" });
    }
    await riego.update(req.body);
    res.json(riego);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5.Eliminar un riego por ID
router.delete("/:id", async (req, res) => {
  try {
    const riego = await Riego.findByPk(req.params.id);
    if (!riego) {
      return res.status(404).json({ error: "Riego no encontrado" });
    }
    await riego.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6.Obtener riegos por cultivo ID
router.get("/cultivo/:id", async (req, res) => {
  try {
    const riegos = await Riego.findAll({
      where: { id_cultivo: req.params.id },
    });
    if (riegos.length === 0) {
      return res.status(404).json({ error: "No se encontraron riegos para este cultivo" });
    }
    res.json(riegos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7.Modificar el riego por cultivo ID
router.put("/cultivo/:id", async (req, res) => {
  try {
    const riego = await Riego.findByPk(req.params.id);
    if (!riego) {
      return res.status(404).json({ error: "Riego no encontrado" });
    }
    await riego.update(req.body);
    res.json(riego);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 8.Obtener riegos por fecha
router.get("/fecha/:fecha", async (req, res) => {
  try {
    const riegos = await Riego.findAll({
      where: { fecha: req.params.fecha },
    });
    if (riegos.length === 0) {
      return res.status(404).json({ error: "No se encontraron riegos para esta fecha" });
    }
    res.json(riegos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 9.Obtener riegos por cantidad de agua
router.get("/cantidad/:cantidad", async (req, res) => {
  try {
    const riegos = await Riego.findAll({
      where: { cantidad_agua: req.params.cantidad },
    });
    if (riegos.length === 0) {
      return res.status(404).json({ error: "No se encontraron riegos con esta cantidad de agua" });
    }
    res.json(riegos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;