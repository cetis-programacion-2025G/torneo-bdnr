async function insertarPartido(db, nuevoPartido) {
    const partido = {
        id_local:        nuevoPartido.id_local,
        id_visitante:    nuevoPartido.id_visitante,
        goles_local:     0,
        goles_visitante: 0,
        jugado:          false,
    };
    await db.collection('partidos').insertOne(partido);    
}

module.exports = { insertarPartido };
