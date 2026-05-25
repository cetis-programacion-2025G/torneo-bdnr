const { obtenerEquipos }        = require('../../db/equipos/obtenerEquipos');
const { dibujarTabla, titulo }  = require('../../utils/ui');

async function listarEquipos(datos) {
    const filas = await obtenerEquipos(datos);
    const columnas = [
        { titulo: 'ID',     clave: 'id',     ancho: 4  },
        { titulo: 'Nombre', clave: 'nombre', ancho: 20 },
        { titulo: 'Ciudad', clave: 'ciudad', ancho: 20 },
    ];
    console.log('');
    titulo('LISTA DE EQUIPOS', 52);
    dibujarTabla(filas, columnas);
}

module.exports = { listarEquipos };
