const Suelo = require("../database/models/suelo");

class SueloService {
  // 1. Obtener todos los registros de suelo
  static async getAllSuelos() {
    return await Suelo.findAll();
  }

  // 2. Obtener un registro de suelo por ID
  static async getSueloById(id) {
    return await Suelo.findByPk(id);
  }

  // 3. Crear un nuevo registro de suelo
  static async createSuelo(data) {
    return await Suelo.create(data);
  }

  // 4. Modificar un registro de suelo por ID
  static async updateSuelo(id, data) {
    const suelo = await Suelo.findByPk(id);
    if (!suelo) throw new Error("Suelo no encontrado");
    return await suelo.update(data);
  }

  // 5. Obtener un registro por cultivo y suelo
  static async getSueloByCultivoAndSuelo(cultivoId, sueloId) {
    return await Suelo.findOne({
      where: {
        id_cultivo: cultivoId,
        id_suelo: sueloId,
      },
    });
  }

  // 6. Eliminar un registro de suelo por ID
  static async deleteSuelo(id) {
    const suelo = await Suelo.findByPk(id);
    if (!suelo) throw new Error("Suelo no encontrado");
    return await suelo.destroy();
  }
}

module.exports = SueloService;