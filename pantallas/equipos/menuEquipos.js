const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarEquipos }  = require('./listarEquipos');
const { agregarEquipo }  = require('./agregarEquipo');
const { editarEquipo }   = require('./editarEquipo');
const { eliminarEquipo } = require('./eliminarEquipo');

async function menuEquipos(datos) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('EQUIPOS', 52);
        console.log('─'.repeat(54));
        console.log('  1. Ver equipos');
        console.log('  2. Agregar equipo');
        console.log('  3. Editar equipo');
        console.log('  4. Eliminar equipo');
        console.log('  0. Volver');
        console.log('─'.repeat(54));
        const op = await pedirEntero('Opcion', [0, 1, 2, 3, 4]);
        switch (op) {
            case 1: await listarEquipos(datos);  await esperarEnter(); break;
            case 2: await agregarEquipo(datos);  await esperarEnter(); break;
            case 3: await editarEquipo(datos);   await esperarEnter(); break;
            case 4: await eliminarEquipo(datos); await esperarEnter(); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuEquipos };
