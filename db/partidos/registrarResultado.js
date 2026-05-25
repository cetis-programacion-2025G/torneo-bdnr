async function registrarResultado(datos, id, golesLocal, golesVisitante) {
    let partido = null;
    for (let i = 0; i < datos.partidos.length; i++) {
        if (datos.partidos[i].id === id) { partido = datos.partidos[i]; break; }
    }
    if (!partido) return false;
    partido.goles_local     = golesLocal;
    partido.goles_visitante = golesVisitante;
    partido.jugado          = true;
    return true;
}

module.exports = { registrarResultado };
