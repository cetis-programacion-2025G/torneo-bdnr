const { eliminarEquipo: dbEliminar }         = require('../../db/equipos/eliminarEquipo');
const { listarEquipos }                      = require('./listarEquipos');
const { preguntar, esperarEnter }            = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla }  = require('../../utils/ui');

async function eliminarEquipo(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('ELIMINAR EQUIPO', 52);
    await listarEquipos(datos);
    if (datos.equipos.length === 0) return;
    console.log('  (0 para cancelar)');
    const id = parseInt(await preguntar('  ID a eliminar'), 10);
    if (id === 0) { console.log('\n  Cancelado.'); await esperarEnter(); return; }
    const ok = await dbEliminar(datos, id);
    console.log(ok ? '\n  Equipo eliminado.' : '\n  Equipo no encontrado.');
    await esperarEnter();
}

module.exports = { eliminarEquipo };
