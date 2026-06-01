const { obtenerPartidos }       = require('../../db/partidos/obtenerPartidos');
const { dibujarTabla, titulo }  = require('../../utils/ui');

async function listarPartidos(datos, db) {
    const filas = await obtenerPartidos(datos, db);
    const columnas = [
        { titulo: 'ID',        clave: 'index',              ancho: 4  },
        { titulo: 'Local',     clave: 'local',           ancho: 16 },
        { titulo: 'Visitante', clave: 'visitante',       ancho: 16 },
        { titulo: 'G.L.',      clave: 'goles_local',     ancho: 4  },
        { titulo: 'G.V.',      clave: 'goles_visitante', ancho: 4  },
        { titulo: 'Jugado',    clave: 'jugado',          ancho: 6  },
    ];
    const filasFormateadas = filas.map(p => ({ ...p, jugado: p.jugado ? 'Si' : 'No' }));
    console.log('');
    titulo('LISTA DE PARTIDOS', 67);
    dibujarTabla(filasFormateadas, columnas);
}

module.exports = { listarPartidos };
