const express = require("express");
const Cultivo = require("../database/models/cultivos");

const router = express.Router();

// 1.Obtener todos los cultivos
router.get("/", async (req, res) => {
  try {
    const cultivos = await Cultivo.findAll();
    res.json(cultivos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2.Obtener un cultivo por ID
router.get("/:id", async (req, res) => {
  try {
    const cultivo = await Cultivo.findByPk(req.params.id);
    if (!cultivo) {
      return res.status(404).json({ error: "Cultivo no encontrado" });
    }
    res.json(cultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3.Crear un nuevo cultivo
router.post("/", async (req, res) => {
  try {
    const cultivo = await Cultivo.create(req.body);
    res.status(201).json(cultivo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4.Actualizar un cultivo por ID
router.put("/:id", async (req, res) => {
  try {
    const cultivo = await Cultivo.findByPk(req.params.id);
    if (!cultivo) {
      return res.status(404).json({ error: "Cultivo no encontrado" });
    }
    await cultivo.update(req.body);
    res.json(cultivo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5.Eliminar un cultivo por ID
router.delete("/:id", async (req, res) => {
  try {
    const cultivo = await Cultivo.findByPk(req.params.id);
    if (!cultivo) {
      return res.status(404).json({ error: "Cultivo no encontrado" });
    }
    await cultivo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;