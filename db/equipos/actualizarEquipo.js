async function actualizarEquipo(datos, id, cambios) {
    let equipo = null;
    for (let i = 0; i < datos.equipos.length; i++) {
        if (datos.equipos[i].id === id) { equipo = datos.equipos[i]; break; }
    }
    if (!equipo) return null;
    equipo.nombre = cambios.nombre;
    equipo.ciudad = cambios.ciudad;
    return equipo;
}

module.exports = { actualizarEquipo };
