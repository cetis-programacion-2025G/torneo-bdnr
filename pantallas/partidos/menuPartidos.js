const { limpiarPantalla, titulo } = require('../../utils/ui');
const { pedirEntero, esperarEnter } = require('../../utils/input');
const { listarPartidos }    = require('./listarPartidos');
const { programarPartido }  = require('./programarPartido');
const { capturarResultado } = require('./capturarResultado');

async function menuPartidos(datos) {
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('PARTIDOS', 67);
        console.log('─'.repeat(69));
        console.log('  1. Ver partidos');
        console.log('  2. Programar partido');
        console.log('  3. Capturar resultado');
        console.log('  0. Volver');
        console.log('─'.repeat(69));
        const op = await pedirEntero('Opcion', [0, 1, 2, 3]);
        switch (op) {
            case 1: await listarPartidos(datos);    await esperarEnter(); break;
            case 2: await programarPartido(datos);  await esperarEnter(); break;
            case 3: await capturarResultado(datos); await esperarEnter(); break;
            case 0: salir = true; break;
        }
    }
}

module.exports = { menuPartidos };
