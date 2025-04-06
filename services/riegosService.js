const Riego = require("../database/models/riegos");

  // 1.Obtener todos los riegos
  const getAllRiegos = async () => {
    try {
      const riegos = await Riego.findAll();
      return riegos;
    } catch (error) {
      throw new Error("Error al obtener los riegos: " + error.message);
    }
  };
  // 2.Obtener un riego por ID
  const getRiegoById = async (id) => {
    try {
      const riego = await Riego.findByPk(id);
      if (!riego) throw new Error("Riego no encontrado");
      return riego;
    } catch (error) {
      throw new Error("Error al obtener el riego: " + error.message);
    }
  };
  // 3.Crear un nuevo riego
  const createRiego = async (data) => {
    try {
      const riego = await Riego.create(data);
      return riego;
    } catch (error) {
      throw new Error("Error al crear el riego: " + error.message);
    }
  };
  // 4.Actualizar un riego por ID
  const updateRiego = async (id, data) => {
    try {
      const riego = await Riego.findByPk(id);
      if (!riego) throw new Error("Riego no encontrado");
      return await riego.update(data);
    } catch (error) {
      throw new Error("Error al actualizar el riego: " + error.message);
    }
  };   
  // 5.Obtener riegos por cultivo ID
    const getRiegosByCultivoId = async (cultivoId) => {
        try {
            const riegos = await Riego.findAll({
                where: {
                    cultivoId: cultivoId,
                },
            });
            return riegos;
        } catch (error) {
            throw new Error("Error al obtener los riegos por cultivo ID: " + error.message);
        }
    };
  // 6.Modificar el riego por cultivo ID
    const updateRiegoByCultivoId = async (cultivoId, data) => {
        try {
            const riego = await Riego.findOne({
                where: {
                    cultivoId: cultivoId,
                },
            });
            if (!riego) throw new Error("Riego no encontrado");
            return await riego.update(data);
        } catch (error) {
            throw new Error("Error al modificar el riego por cultivo ID: " + error.message);
        }
    };
  // 7.Obtener riegos por fecha
    const getRiegosByFecha = async (fecha) => {
        try {
            const riegos = await Riego.findAll({
                where: {
                    fecha: fecha,
                },
            });
            return riegos;
        } catch (error) {
            throw new Error("Error al obtener los riegos por fecha: " + error.message);
        }
    };
  // 8.Obtener riegos por cantidad de agua
    const getRiegosByCantidadAgua = async (cantidadAgua) => {
        try {
            const riegos = await Riego.findAll({
                where: {
                    cantidadAgua: cantidadAgua,
                },
            });
            return riegos;
        } catch (error) {
            throw new Error("Error al obtener los riegos por cantidad de agua: " + error.message);
        }
    };
  // 9.Eliminar un riego por ID
  const deleteRiego = async (id) => {
    try {
      const riego = await Riego.findByPk(id);
      if (!riego) throw new Error("Riego no encontrado");
      await riego.destroy();
      return { message: "Riego eliminado" };
    } catch (error) {
      throw new Error("Error al eliminar el riego: " + error.message);
    }
  };
  // 10. Eliminar todos los riegos
    const deleteAllRiegos = async () => {
        try {
            await Riego.destroy({ where: {}, truncate: true });
            return { message: "Todos los riegos eliminados" };
        } catch (error) {
            throw new Error("Error al eliminar todos los riegos: " + error.message);
        }
    };

module.exports = {
    getAllRiegos,
    getRiegoById,
    createRiego,
    updateRiego,
    deleteRiego,
    getRiegosByCultivoId,
    updateRiegoByCultivoId,
    getRiegosByFecha,
    getRiegosByCantidadAgua,
    deleteAllRiegos
};