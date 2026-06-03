const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarPartidos }    = require('./listarPartidos');
const { programarPartido }  = require('./programarPartido');
const { capturarResultado } = require('./capturarResultado');

async function menuPartidos(datos, db) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('PARTIDOS', 67);
        await listarPartidos(datos, db);
        console.log('');
        console.log('─'.repeat(69));
        console.log('  1. Programar partido');
        console.log('  2. Registrar resultado');
        console.log('  0. Volver');
        console.log('─'.repeat(69));
        const op = await pedirEntero('Opcion', [0, 1, 2]);
        switch (op) {
            case 1: await programarPartido(db);  break;
            case 2: await capturarResultado(datos); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuPartidos };
