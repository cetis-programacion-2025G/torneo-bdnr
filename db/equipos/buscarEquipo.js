async function buscarEquipo(datos, id) {
    for (let i = 0; i < datos.equipos.length; i++) {
        if (datos.equipos[i].id === id) return datos.equipos[i];
    }
    return null;
}

module.exports = { buscarEquipo };
