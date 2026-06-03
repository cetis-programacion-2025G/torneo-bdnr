const { obtenerPartidosJugados }                                 = require('../../db/partidos/obtenerPartidosJugados');
const { registrarResultado }                              = require('../../db/partidos/registrarResultado');
const { dibujarTabla, titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');
const { pedirEntero, esperarEnter }                        = require('../../utils/input');

async function capturarResultado(db) {
    limpiarPantalla();
    console.log('');
    tituloUI('REGISTRAR RESULTADO', 67);
    const pendientes = (await obtenerPartidosJugados(db));
    if (pendientes.length === 0) {
        console.log('\n  No hay partidos pendientes.');
        await esperarEnter();
        return;
    }
    dibujarTabla(pendientes, [
        { titulo: '#',        clave: 'index',        ancho: 4  },
        { titulo: 'Local',     clave: 'local',     ancho: 16 },
        { titulo: 'Visitante', clave: 'visitante', ancho: 16 },
    ]);
    
    let indices = [0];
    
    for (let i = 0; i < pendientes.length; i++) {
        indices.push(pendientes[i].index);
    }

    console.log('  (0 para cancelar)');
    const renglon   = await pedirEntero('  Numero del renglon (partido) ', indices);
    if (renglon === 0) return;
    const golesLocal    = await pedirEntero('  Goles Local',    [0,1,2,3,4,5,6,7,8,9,10]);
    const golesVisitante = await pedirEntero('  Goles Visitante', [0,1,2,3,4,5,6,7,8,9,10]);

    await registrarResultado(db, pendientes[renglon - 1 ]._id, golesLocal, golesVisitante);
    
    console.log('\n  Resultado registrado.');
    await esperarEnter();
}

module.exports = { capturarResultado };
