const { obtenerEquipos }                                  = require('../../db/equipos/obtenerEquipos');
const { insertarPartido }                                 = require('../../db/partidos/insertarPartido');
const { dibujarTabla, titulo: tituloUI, limpiarPantalla } = require('../../utils/ui');
const { pedirEntero, esperarEnter }                        = require('../../utils/input');

async function programarPartido(datos) {
    limpiarPantalla();
    console.log('');
    tituloUI('PROGRAMAR PARTIDO', 52);
    const equipos = await obtenerEquipos(datos);
    if (equipos.length < 2) {
        console.log('\n  Se necesitan al menos 2 equipos.');
        await esperarEnter();
        return;
    }
    dibujarTabla(equipos, [
        { titulo: 'ID',     clave: 'id',     ancho: 4  },
        { titulo: 'Nombre', clave: 'nombre', ancho: 20 },
    ]);
    const ids          = equipos.map(e => e.id);
    console.log('  (0 para cancelar)');
    const id_local     = await pedirEntero('  ID Equipo Local', [...ids, 0]);
    if (id_local === 0) return;
    const id_visitante = await pedirEntero('  ID Equipo Visitante', [...ids, 0]);
    if (id_visitante === 0) return;
    if (id_local === id_visitante) {
        console.log('\n  Un equipo no puede jugar contra si mismo.');
        await esperarEnter();
        return;
    }
    const nuevo        = await insertarPartido(datos, { id_local, id_visitante });
    console.log(`\n  Partido programado con ID ${nuevo.id}.`);
    await esperarEnter();
}

module.exports = { programarPartido };
