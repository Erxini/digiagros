const Riego = require("../database/models/riegos");

class RiegosService {
    // 1.Obtener todos los riegos
  static async getAllRiegos() {
    return await Riego.findAll();
  }
  // 2.Obtener un riego por ID
  static async getRiegoById(id) {
    return await Riego.findByPk(id);
  }
    // 3.Crear un nuevo riego
  static async createRiego(data) {
    return await Riego.create(data);
  }
    // 4.Actualizar un riego por ID
  static async updateRiego(id, data) {
    const riego = await Riego.findByPk(id);
    if (!riego) throw new Error("Riego no encontrado");
    return await riego.update(data);
  }
   
    // 5.Eliminar un riego por ID
  static async deleteRiego(id) {
    const riego = await Riego.findByPk(id);
    if (!riego) throw new Error("Riego no encontrado");
    return await riego.destroy();
  }
  // 6.Obtener riegos por cultivo ID
    static async getRiegosByCultivoId(cultivoId) {
        return await Riego.findAll({
        where: {
            cultivoId: cultivoId,
        },
        });
    }
  // 7.Modificar el riego por cultivo ID
    static async updateRiegoByCultivoId(cultivoId, data) {
        const riego = await Riego.findOne({
            where: {
                cultivoId: cultivoId,
            },
        });
        if (!riego) throw new Error("Riego no encontrado");
        return await riego.update(data);
    }
    // 8.Obtener riegos por fecha
    static async getRiegosByFecha(fecha) {
        return await Riego.findAll({
            where: {
                fecha: fecha,
            },
        });
    }
    // 9.Obtener riegos por cantidad de agua
    static async getRiegosByCantidadAgua(cantidadAgua) {
        return await Riego.findAll({
            where: {
                cantidadAgua: cantidadAgua,
            },
        });
    }
}

module.exports = RiegosService;