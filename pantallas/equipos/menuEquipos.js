const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarEquipos }  = require('./listarEquipos');
const { agregarEquipo }  = require('./agregarEquipo');
const { editarEquipo }   = require('./editarEquipo');
const { eliminarEquipo } = require('./eliminarEquipo');

async function menuEquipos(datos, db) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('EQUIPOS', 52);
        await listarEquipos(db);
        console.log('');
        console.log('─'.repeat(54));
        console.log('  1. Agregar equipo');
        console.log('  2. Editar equipo');
        console.log('  3. Eliminar equipo');
        console.log('  0. Volver');
        console.log('─'.repeat(54));
        const op = await pedirEntero('Opcion', [0, 1, 2, 3]);
        switch (op) {
            case 1: await agregarEquipo(db);  break;
            case 2: await editarEquipo(db);   break;
            case 3: await eliminarEquipo(datos); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuEquipos };
