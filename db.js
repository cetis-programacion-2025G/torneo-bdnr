const db = db.getSiblingDB('torneo_bdnr');

db.dropCollection('equipos');
db.dropCollection('partidos');

// 1. Insertar todos los equipos de una vez y capturar sus ObjectIds
const resEquipos = db.equipos.insertMany([
    { nombre: 'Los Toros',   ciudad: 'Guadalajara'      },  // [0]
    { nombre: 'Los Tigres',  ciudad: 'Monterrey'        },  // [1]
    { nombre: 'Las Aguilas', ciudad: 'Ciudad de Mexico' },  // [2]
    { nombre: 'Los Rayados', ciudad: 'Monterrey'        },  // [3]
    { nombre: 'Las Chivas',  ciudad: 'Guadalajara'      },  // [4]
]);

const torosId    = resEquipos.insertedIds[0];
const tigresId   = resEquipos.insertedIds[1];
const aguilasId  = resEquipos.insertedIds[2];
const rayadosId  = resEquipos.insertedIds[3];
const chivasId   = resEquipos.insertedIds[4];

// 2. Insertar partidos usando directamente los ObjectId capturados
db.partidos.insertMany([
    { id_local: torosId,   id_visitante: tigresId,  goles_local: 2, goles_visitante: 1, jugado: true  },
    { id_local: aguilasId, id_visitante: rayadosId,  goles_local: 0, goles_visitante: 0, jugado: false },
    { id_local: chivasId,  id_visitante: torosId,    goles_local: 3, goles_visitante: 1, jugado: true  },
    { id_local: tigresId,  id_visitante: aguilasId,  goles_local: 0, goles_visitante: 0, jugado: false },
]);

db.partidos.aggregate([
    // 1. Traer el documento del equipo local
    { $lookup: {
        from: 'equipos',
        localField: 'id_local',
        foreignField: '_id',
        as: 'equipo_local'
    }},
    // 2. Traer el documento del equipo visitante
    { $lookup: {
        from: 'equipos',
        localField: 'id_visitante',
        foreignField: '_id',
        as: 'equipo_visitante'
    }},
    // 3. Dar forma al resultado: quitar ids, renombrar y desenvolver arreglos
    { $project: {
        _id:             0,
        goles_local:     1,
        goles_visitante: 1,
        jugado:          1,
        local:           { $arrayElemAt: ['$equipo_local.nombre',     0] },
        visitante:       { $arrayElemAt: ['$equipo_visitante.nombre', 0] },
    }},
]);



db.partidos.aggregate([
    { $lookup: {
        from: 'equipos',
        localField: 'id_local',
        foreignField: '_id',
        as: 'equipo_local'
    }},
    { $lookup: {
        from: 'equipos',
        localField: 'id_visitante',
        foreignField: '_id',
        as: 'equipo_visitante'
    }},
    { $setWindowFields: {
        sortBy: { _id: 1 },
        output: {
            posicion: { $documentNumber: {} }
        }
    }},
    { $project: {
        _id:             1,
        posicion:        1,
        goles_local:     1,
        goles_visitante: 1,
        jugado:          1,
        local:           { $arrayElemAt: ['$equipo_local.nombre',     0] },
        visitante:       { $arrayElemAt: ['$equipo_visitante.nombre', 0] },
    }},
]);