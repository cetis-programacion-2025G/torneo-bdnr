// TODO (MongoDB): db.collection('equipos').find().sort({ nombre: 1 }).toArray()
async function obtenerEquipos(datos) {
    return datos.equipos;
}

module.exports = { obtenerEquipos };
