const { obtenerPartidos }                                 = require('../../db/partidos/obtenerPartidos');
const { registrarResultado }                              = require('../../db/partidos/registrarResultado');
const { dibujarTabla, titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');
const { pedirEntero, esperarEnter }                        = require('../../utils/input');

async function capturarResultado(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('REGISTRAR RESULTADO', 67);
    const pendientes = (await obtenerPartidos(datos)).filter(p => !p.jugado);
    if (pendientes.length === 0) {
        console.log('\n  No hay partidos pendientes.');
        await esperarEnter();
        return;
    }
    dibujarTabla(pendientes, [
        { titulo: 'ID',        clave: 'id',        ancho: 4  },
        { titulo: 'Local',     clave: 'local',     ancho: 16 },
        { titulo: 'Visitante', clave: 'visitante', ancho: 16 },
    ]);
    const ids  = pendientes.map(p => p.id);
    console.log('  (0 para cancelar)');
    const id   = await pedirEntero('  ID Partido', [...ids, 0]);
    if (id === 0) return;
    const golesLocal    = await pedirEntero('  Goles Local',    [0,1,2,3,4,5,6,7,8,9,10]);
    const golesVisitante = await pedirEntero('  Goles Visitante', [0,1,2,3,4,5,6,7,8,9,10]);
    await registrarResultado(datos, id, golesLocal, golesVisitante);
    console.log('\n  Resultado registrado.');
    await esperarEnter();
}

module.exports = { capturarResultado };
