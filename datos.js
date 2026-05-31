// datos.js — Datos iniciales del torneo de futbol (version sin base de datos)

function datosIniciales() {
    return {
        equipos: [
            { id: 1, nombre: 'Los Toros X',   ciudad: 'Guadalajara'      },
            { id: 2, nombre: 'Los Tigres x',  ciudad: 'Monterrey'        },
            { id: 3, nombre: 'Las Aguilas x', ciudad: 'Ciudad de Mexico' },
            { id: 4, nombre: 'Los Rayados x', ciudad: 'Monterrey'        },
            { id: 5, nombre: 'Las Chivas x',  ciudad: 'Guadalajara'      },
        ],
        partidos: [
            { id: 1, id_local: 1, id_visitante: 2, goles_local: 2, goles_visitante: 1, jugado: true  },
            { id: 2, id_local: 3, id_visitante: 4, goles_local: 0, goles_visitante: 0, jugado: false },
            { id: 3, id_local: 5, id_visitante: 1, goles_local: 3, goles_visitante: 1, jugado: true  },
            { id: 4, id_local: 2, id_visitante: 3, goles_local: 0, goles_visitante: 0, jugado: false },
        ],
    };
}

module.exports = { datosIniciales };
