const { buscarEquipo }                       = require('../../db/equipos/buscarEquipo');
const { eliminarEquipo: dbEliminar }         = require('../../db/equipos/eliminarEquipo');
const { listarEquipos }                      = require('./listarEquipos');
const { preguntar, esperarEnter }            = require('../../utils/input');
const { titulo: tituloUI, limpiarPantalla }  = require('../../utils/ui');

async function eliminarEquipo(db) {
    limpiarPantalla();
    console.log('');
    tituloUI('ELIMINAR EQUIPO', 52);
    const equipos =await listarEquipos(db);
    
    if (equipos.length === 0) return;

    console.log('  (0 para cancelar)');
    const posicion = parseInt(await preguntar('  # (Numero de fila) a eliminar'), 10);
    
    if (posicion === 0) {
         console.log('\n  Cancelado.'); 
         await esperarEnter(); 
         return;
    }
    
    const equipo  = await buscarEquipo(equipos, posicion);
    await dbEliminar(db, equipo._id);
    console.log('\n  Equipo eliminado.');
    await esperarEnter();
}

module.exports = { eliminarEquipo };
