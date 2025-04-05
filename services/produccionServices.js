const Produccion = require("../database/models/produccion");

class ProduccionService {
  // 1. Obtener todos los registros de producción
  static async getAllProduccion() {
    return await Produccion.findAll();
  }

  // 2. Obtener un registro de producción por ID
  static async getProduccionById(id) {
    return await Produccion.findByPk(id);
  }

  // 3. Crear un nuevo registro de producción
  static async createProduccion(data) {
    return await Produccion.create(data);
  }

  // 4. Modificar un registro de producción por ID
  static async updateProduccion(id, data) {
    const produccion = await Produccion.findByPk(id);
    if (!produccion) throw new Error("Producción no encontrada");
    return await produccion.update(data);
  }

  // 5. Obtener un registro de producción por cultivo y suelo
  static async getProduccionByCultivoAndSuelo(cultivoId, sueloId) {
    return await Produccion.findOne({
      where: {
        id_cultivo: cultivoId,
        id_suelo: sueloId,
      },
    });
  }

  // 6. Eliminar un registro de producción por ID
  static async deleteProduccion(id) {
    const produccion = await Produccion.findByPk(id);
    if (!produccion) throw new Error("Producción no encontrada");
    return await produccion.destroy();
  }

  // 7. Obtener producción por cultivo
  static async getProduccionByCultivo(cultivoId) {
    return await Produccion.findAll({
      where: { id_cultivo: cultivoId },
    });
  }

  // 8. Obtener producción por fecha
  static async getProduccionByFecha(fecha) {
    return await Produccion.findAll({
      where: { fecha: fecha },
    });
  }

  // 9. Obtener producción por calidad
  static async getProduccionByCalidad(calidad) {
    return await Produccion.findAll({
      where: { calidad: calidad },
    });
  }

  // 10. Obtener producción por cantidad
  static async getProduccionByCantidad(cantidad) {
    return await Produccion.findAll({
      where: { cantidad: cantidad },
    });
  }

  // 11. Obtener producción por calidad y cultivo
  static async getProduccionByCultivoAndCantidad(cultivoId, cantidad) {
    return await Produccion.findAll({
      where: {
        id_cultivo: cultivoId,
        cantidad: cantidad,
      },
    });
  }
}

module.exports = ProduccionService;