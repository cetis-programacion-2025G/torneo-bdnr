async function obtenerPartidos(datos) {
    const resultado = [];
    for (let i = 0; i < datos.partidos.length; i++) {
        const partido = datos.partidos[i];
        let local = null;
        let visitante = null;
        for (let j = 0; j < datos.equipos.length; j++) {
            if (datos.equipos[j].id === partido.id_local)     local     = datos.equipos[j];
            if (datos.equipos[j].id === partido.id_visitante) visitante = datos.equipos[j];
        }
        resultado.push({
            id:              partido.id,
            local:           local     ? local.nombre     : '(desconocido)',
            visitante:       visitante ? visitante.nombre : '(desconocido)',
            goles_local:     partido.goles_local,
            goles_visitante: partido.goles_visitante,
            jugado:          partido.jugado,
        });
    }
    return resultado;
}

module.exports = { obtenerPartidos };
