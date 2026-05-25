const { buscarEquipo }                       = require('../../db/equipos/buscarEquipo');
const { actualizarEquipo }                   = require('../../db/equipos/actualizarEquipo');
const { listarEquipos }                      = require('./listarEquipos');
const { preguntar }                          = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla }  = require('../../utils/ui');

async function editarEquipo(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('EDITAR EQUIPO', 52);
    await listarEquipos(datos);
    if (datos.equipos.length === 0) return;
    console.log('  (0 para cancelar)');
    const id = parseInt(await preguntar('  ID a editar'), 10);
    if (id === 0) return;
    const e  = await buscarEquipo(datos, id);
    if (!e) { console.log('\n  Equipo no encontrado.'); return; }
    console.log('\n  (Enter para conservar el valor actual)\n');
    const nombre = (await preguntar(`  Nombre [${e.nombre}]: `)) || e.nombre;
    const ciudad = (await preguntar(`  Ciudad [${e.ciudad}]: `)) || e.ciudad;
    await actualizarEquipo(datos, id, { nombre, ciudad });
    console.log('\n  Equipo actualizado.');
}

module.exports = { editarEquipo };
