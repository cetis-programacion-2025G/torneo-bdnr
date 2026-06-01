async function buscarEquipo(equipos, posicion) {
    
    const equipo = equipos[posicion - 1]

    if (equipo) {
        return equipo;
    }

    return null;
}

module.exports = { buscarEquipo };
