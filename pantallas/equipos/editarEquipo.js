const { buscarEquipo }                       = require('../../db/equipos/buscarEquipo');
const { actualizarEquipo }                   = require('../../db/equipos/actualizarEquipo');
const { listarEquipos }                      = require('./listarEquipos');
const { preguntar, esperarEnter }            = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla }  = require('../../utils/ui');

async function editarEquipo(db) {
    limpiarPantalla();
    console.log('');
    tituloUI('EDITAR EQUIPO', 52);

    const equipos = await listarEquipos(db);

    if (equipos.length === 0) return;

    console.log('  (0 para cancelar)');
    const posicion = parseInt(await preguntar('  Escribe el # (numero de fila) a editar: '), 10);
    
    if (posicion === 0) {
        console.log('\n  Cancelado.'); 
        await esperarEnter(); 
        return; 
    }

    const e  = await buscarEquipo(equipos, posicion);
    
    if (e == null) { 
        console.log('\n  Equipo no encontrado.'); 
        await esperarEnter(); 
        return; 
    }

    console.log('\n  (Enter para conservar el valor actual)\n');
    const nombre = (await preguntar(`  Nombre [${e.nombre}]: `)) || e.nombre;
    const ciudad = (await preguntar(`  Ciudad [${e.ciudad}]: `)) || e.ciudad;

    await actualizarEquipo(db, e._id, { nombre, ciudad });

    console.log('\n  Equipo actualizado.');

    await esperarEnter();
}

module.exports = { editarEquipo };
