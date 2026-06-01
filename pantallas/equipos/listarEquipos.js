const { obtenerEquipos }        = require('../../db/equipos/obtenerEquipos');
const { dibujarTabla, titulo }  = require('../../utils/ui');

async function listarEquipos(db) {
    const filas = await obtenerEquipos(db);
    const columnas = [
        { titulo: '#',     clave: 'posicion',  ancho: 4  },
        { titulo: 'Nombre', clave: 'nombre', ancho: 20 },
        { titulo: 'Ciudad', clave: 'ciudad', ancho: 20 },
    ];
    console.log('');
    titulo('LISTA DE EQUIPOS', 52);
    dibujarTabla(filas, columnas);
}

module.exports = { listarEquipos };
