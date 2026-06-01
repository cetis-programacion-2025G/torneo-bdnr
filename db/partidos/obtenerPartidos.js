async function obtenerPartidos(datos, db) {
    const partidos = await db.collection('partidos').aggregate([
        {
            $lookup: {
                from: 'equipos',
                localField: 'id_local',
                foreignField: '_id',
                as: 'equipo_local'
            }
        }, {
            $lookup: {
                from: 'equipos',
                localField: 'id_visitante',
                foreignField: '_id',
                as: 'equipo_visitante'
            }
        }, 
        {
            $unwind: '$equipo_local'
        },  {
            $unwind: '$equipo_visitante'
        }, {
            $project:  {
                _id: 1,
                goles_local: 1,
                goles_visitante: 1,
                jugado: 1,
                local: '$equipo_local.nombre',
                visitante: '$equipo_visitante.nombre'
            }
        },
        {
            $setWindowFields: {
            sortBy: { _id: 1 },
            output: {
                index: {
                    $documentNumber: {}
                }
            }
        }
    },
    ]).toArray();

    return partidos;
}

module.exports = { obtenerPartidos };
