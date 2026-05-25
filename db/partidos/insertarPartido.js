async function insertarPartido(datos, nuevoPartido) {
    let id;
    if (datos.partidos.length > 0) {
        id = datos.partidos[datos.partidos.length - 1].id + 1;
    } else {
        id = 1;
    }
    const partido = {
        id:              id,
        id_local:        nuevoPartido.id_local,
        id_visitante:    nuevoPartido.id_visitante,
        goles_local:     0,
        goles_visitante: 0,
        jugado:          false,
    };
    datos.partidos.push(partido);
    return partido;
}

module.exports = { insertarPartido };
