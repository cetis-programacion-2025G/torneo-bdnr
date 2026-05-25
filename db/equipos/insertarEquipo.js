async function insertarEquipo(datos, nuevoEquipo) {
    let id;
    if (datos.equipos.length > 0) {
        id = datos.equipos[datos.equipos.length - 1].id + 1;
    } else {
        id = 1;
    }
    const equipo = {
        id:     id,
        nombre: nuevoEquipo.nombre,
        ciudad: nuevoEquipo.ciudad,
    };
    datos.equipos.push(equipo);
    return equipo;
}

module.exports = { insertarEquipo };
