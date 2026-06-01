async function eliminarEquipo(db, id) {
    await db.collection('equipos').deleteOne({
        _id: id
    });
}

module.exports = { eliminarEquipo };
