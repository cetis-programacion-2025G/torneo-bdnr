async function registrarResultado(db, id, golesLocal, golesVisitante) {
    await db.collection('partidos').updateOne(
        { _id: id },
        { $set: {
            goles_local: golesLocal,
            goles_visitante: golesVisitante,
            jugado: true
        }}
    );
    
    return true;
}

module.exports = { registrarResultado };
