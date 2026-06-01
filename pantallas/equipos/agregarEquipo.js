const { insertarEquipo }                    = require('../../db/equipos/insertarEquipo');
const { preguntar, esperarEnter }           = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function agregarEquipo(db) {
    limpiarPantalla();
    console.log('');
    tituloUI('AGREGAR EQUIPO');
    console.log('  (0 en cualquier campo para cancelar)');
    const nombre = await preguntar('  Nombre');
    if (nombre === '0') { console.log('\n  Cancelado.'); return; }
    const ciudad = await preguntar('  Ciudad');
    if (ciudad === '0') { console.log('\n  Cancelado.'); return; }
    const nuevo  = await insertarEquipo(db, { nombre, ciudad });
    console.log(`\n  Equipo "${nombre}" fue agregado `);
    await esperarEnter();
}

module.exports = { agregarEquipo };
