const { datosIniciales }   = require('./datos');
const { limpiarPantalla, titulo } = require('./utils/ui');
const { pedirEntero }      = require('./utils/input');
const { menuEquipos }      = require('./pantallas/equipos/menuEquipos');
const { menuPartidos }     = require('./pantallas/partidos/menuPartidos');
// TODO: const { conectar } = require('./conexion');

async function main() {
    // TODO: const { cliente, db } = await conectar();
    const datos = datosIniciales();
    let salir = false;
    while (!salir) {
        limpiarPantalla();
        console.log('');
        titulo('TORNEO — FUTBOL');
        console.log('─'.repeat(46));
        console.log('  1. Equipos');
        console.log('  2. Partidos');
        console.log('  0. Salir');
        console.log('─'.repeat(46));
        const op = await pedirEntero('Opcion', [0, 1, 2]);
        switch (op) {
            case 1: await menuEquipos(datos);  break;
            case 2: await menuPartidos(datos); break;
            case 0: salir = true; break;
        }
    }
    // TODO: await cliente.close();
    console.log('\nHasta luego.\n');
}

main();
