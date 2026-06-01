async function insertarEquipo(db, nuevoEquipo) {
    await db.collection('equipos').insertOne(nuevoEquipo);
}

module.exports = { insertarEquipo };
