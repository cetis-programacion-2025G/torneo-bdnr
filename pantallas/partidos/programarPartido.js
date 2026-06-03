const { obtenerEquipos }                                  = require('../../db/equipos/obtenerEquipos');
const { insertarPartido }                                 = require('../../db/partidos/insertarPartido');
const { dibujarTabla, titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');
const { pedirEntero, esperarEnter }                        = require('../../utils/input');

async function programarPartido(db) {
    limpiarPantalla();
    console.log('');
    tituloUI('PROGRAMAR PARTIDO', 52);
    const equipos = await obtenerEquipos(db);
    if (equipos.length < 2) {
        console.log('\n  Se necesitan al menos 2 equipos.');
        await esperarEnter();
        return;
    }
    dibujarTabla(equipos, [
        { titulo: 'ID',     clave: 'posicion',     ancho: 4  },
        { titulo: 'Nombre', clave: 'nombre', ancho: 20 },
    ]);

    const posiciones = [];
    for(let i = 0; i < equipos.length; i++) {        
        posiciones.push(i + 1);
    }

    console.log('  (0 para cancelar)');
    const posicion_local     = await pedirEntero('  Numero de reglon del Equipo Local', [...posiciones, 0]);
    if (posicion_local === 0) return;
    const posicion_visitante = await pedirEntero('  Numero de reglon del Equipo Visitante', [...posiciones, 0]);
    if (posicion_visitante === 0) return;

    if (posicion_local === posicion_visitante) {
        console.log('\n  Un equipo no puede jugar contra si mismo.');
        await esperarEnter();
        return;
    }

    const id_local = equipos[posicion_local - 1]._id;
    const id_visitante = equipos[posicion_visitante - 1]._id;

    await insertarPartido(db, { id_local, id_visitante });
    console.log(`\n  Partido programado`);
    await esperarEnter();
}

module.exports = { programarPartido };
