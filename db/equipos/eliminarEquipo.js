async function eliminarEquipo(datos, id) {
    let idx = -1;
    for (let i = 0; i < datos.equipos.length; i++) {
        if (datos.equipos[i].id === id) { idx = i; break; }
    }
    if (idx === -1) return false;
    datos.equipos.splice(idx, 1);
    return true;
}

module.exports = { eliminarEquipo };
