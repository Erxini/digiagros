const Cultivo = require("../database/models/cultivos");

class CultivosService {
    // 1.Obtener todos los cultivos
  static async getAllCultivos() {
    return await Cultivo.findAll();
  }
    // 2.Obtener un cultivo por ID
  static async getCultivoById(id) {
    return await Cultivo.findByPk(id);
  }
    // 3.Crear un nuevo cultivo
  static async createCultivo(data) {
    return await Cultivo.create(data);
  }
    // 4.Modificar un cultivo por ID
  static async updateCultivo(id, data) {
    const cultivo = await Cultivo.findByPk(id);
    if (!cultivo) throw new Error("Cultivo no encontrado");
    return await cultivo.update(data);
  }
    // 5.Eliminar un cultivo por ID de suelo
  static async deleteCultivo(id) {
    const cultivo = await Cultivo.findByPk(id);
    if (!cultivo) throw new Error("Cultivo no encontrado");
    return await cultivo.destroy();
  }
}

module.exports = CultivosService;