async function actualizarEquipo(db, id, cambios) {
    await db.collection('equipos').updateOne({
        _id: id
    }, { 
        $set: {
            nombre: cambios.nombre,
            ciudad: cambios.ciudad,
        }
    });
}

module.exports = { actualizarEquipo };
