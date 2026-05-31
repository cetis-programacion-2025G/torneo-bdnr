const db = db.getSiblingDB('torneo');

db.equipos.drop();
db.partidos.drop();

const resEquipos = db.equipos.insertMany([
    { nombre: 'Los Toros',   ciudad: 'Guadalajara'      },
    { nombre: 'Los Tigres',  ciudad: 'Monterrey'        },
    { nombre: 'Las Aguilas', ciudad: 'Ciudad de Mexico' },
    { nombre: 'Los Rayados', ciudad: 'Monterrey'        },
    { nombre: 'Las Chivas',  ciudad: 'Guadalajara'      },
]);

const torosId    = resEquipos.insertedIds[0];
const tigresId   = resEquipos.insertedIds[1];
const aguilasId  = resEquipos.insertedIds[2];
const rayadosId  = resEquipos.insertedIds[3];
const chivasId   = resEquipos.insertedIds[4];

db.partidos.insertMany([
    { id_local: torosId,   id_visitante: tigresId,  goles_local: 2, goles_visitante: 1, jugado: true  },
    { id_local: aguilasId, id_visitante: rayadosId,  goles_local: 0, goles_visitante: 0, jugado: false },
    { id_local: chivasId,  id_visitante: torosId,    goles_local: 3, goles_visitante: 1, jugado: true  },
    { id_local: tigresId,  id_visitante: aguilasId,  goles_local: 0, goles_visitante: 0, jugado: false },
]);