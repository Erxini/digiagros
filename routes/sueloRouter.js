const express = require("express");
const Suelo = require("../database/models/suelo");

const router = express.Router();

// 1.Obtener todos los registros de suelo
router.get("/", async (req, res) => {
  try {
    const suelos = await Suelo.findAll();
    res.json(suelos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2.Obtener un registro de suelo por ID
router.get("/:id", async (req, res) => {
  try {
    const suelo = await Suelo.findByPk(req.params.id);
    if (!suelo) {
      return res.status(404).json({ error: "Suelo no encontrado" });
    }
    res.json(suelo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3.Crear un nuevo registro de suelo
router.post("/", async (req, res) => {
  try {
    const suelo = await Suelo.create(req.body);
    res.status(201).json(suelo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4.Actualizar un registro de suelo por ID
router.put("/:id", async (req, res) => {
  try {
    const suelo = await Suelo.findByPk(req.params.id);
    if (!suelo) {
      return res.status(404).json({ error: "Suelo no encontrado" });
    }
    await suelo.update(req.body);
    res.json(suelo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5.Obtener un registro por cultivo y suelo
router.get("/cultivo/:id/suelo/:sueloId", async (req, res) => {
  try {
    const suelo = await Suelo.findOne({
      where: {
        cultivoId: req.params.id,
        id: req.params.sueloId,
      },
    });
    if (!suelo) {
      return res.status(404).json({ error: "Suelo no encontrado" });
    }
    res.json(suelo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6.Eliminar un registro de suelo por ID
router.delete("/:id", async (req, res) => {
  try {
    const suelo = await Suelo.findByPk(req.params.id);
    if (!suelo) {
      return res.status(404).json({ error: "Suelo no encontrado" });
    }
    await suelo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;