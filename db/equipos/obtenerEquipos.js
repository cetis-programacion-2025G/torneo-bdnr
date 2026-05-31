async function obtenerEquipos(db) {
    return await db.collection('equipos').find().toArray();
}

module.exports = { obtenerEquipos };
