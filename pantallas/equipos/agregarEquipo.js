const { insertarEquipo }                    = require('../../db/equipos/insertarEquipo');
const { preguntar }                         = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');

async function agregarEquipo(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('AGREGAR EQUIPO');
    const nombre = await preguntar('  Nombre');
    const ciudad = await preguntar('  Ciudad');
    const nuevo  = await insertarEquipo(datos, { nombre, ciudad });
    console.log(`\n  Equipo "${nuevo.nombre}" agregado con ID ${nuevo.id}.`);
}

module.exports = { agregarEquipo };
