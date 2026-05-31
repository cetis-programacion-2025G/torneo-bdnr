async function obtenerEquipos(db) {
    const equipos = await db.collection('equipos').find();
    let posicion = 1;
    const resultados = [];
    for await (const equipo of equipos) {
        const equipoConPosicion = equipo;
        equipoConPosicion.posicion = posicion;
        resultados.push(equipoConPosicion);
        posicion++;
    }

    return resultados;
}

module.exports = { obtenerEquipos };
