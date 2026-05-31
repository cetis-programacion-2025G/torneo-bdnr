# Base de Datos — Torneo (MongoDB)

- **Base de datos:** `torneo_bdnr`
- **Motor:** MongoDB
- **Colecciones:** `equipos`, `partidos`

---

## Colección: `equipos`

Almacena los equipos participantes del torneo.

| Campo    | Tipo       | Requerido | Descripción                        |
|----------|------------|-----------|------------------------------------|
| `_id`    | `ObjectId` | Sí (auto) | Identificador único del documento  |
| `nombre` | `String`   | Sí        | Nombre del equipo                  |
| `ciudad` | `String`   | Sí        | Ciudad de origen del equipo        |

**Documento de ejemplo:**
```json
{
  "_id": "ObjectId('664a1f...')",
  "nombre": "Tigres",
  "ciudad": "Monterrey"
}
```

---

## Colección: `partidos`

Almacena los partidos programados y sus resultados.

| Campo            | Tipo       | Requerido | Default | Descripción                                      |
|------------------|------------|-----------|---------|--------------------------------------------------|
| `_id`            | `ObjectId` | Sí (auto) | —       | Identificador único del documento                |
| `id_local`       | `ObjectId` | Sí        | —       | Referencia al equipo local (`equipos._id`)       |
| `id_visitante`   | `ObjectId` | Sí        | —       | Referencia al equipo visitante (`equipos._id`)   |
| `goles_local`    | `Int`      | Sí        | `0`     | Goles anotados por el equipo local               |
| `goles_visitante`| `Int`      | Sí        | `0`     | Goles anotados por el equipo visitante           |
| `jugado`         | `Boolean`  | Sí        | `false` | Indica si el partido ya fue jugado               |

**Documento de ejemplo:**
```json
{
  "_id": "ObjectId('664b2e...')",
  "id_local": "ObjectId('664a1f...')",
  "id_visitante": "ObjectId('664a2c...')",
  "goles_local": 2,
  "goles_visitante": 1,
  "jugado": true
}
```

---

## Relaciones entre colecciones

En MongoDB **no existen llaves foráneas**. Las relaciones se modelan guardando el `ObjectId` del documento referenciado — la integridad es responsabilidad de la aplicación, no del motor.

```
partidos.id_local      →  equipos._id
partidos.id_visitante  →  equipos._id
```

> **Referencia vs Embebido**
> Este diseño usa **referencias** (`ObjectId`): `partidos` guarda el `_id` del equipo.
> La alternativa en MongoDB sería **embeber** el documento completo del equipo dentro del partido, evitando consultas adicionales pero duplicando datos.
>
> Se eligió referenciar porque un equipo puede aparecer en muchos partidos y sus datos pueden cambiar.

---

## Índices sugeridos

```js
// Búsqueda de partidos por equipo local o visitante
db.partidos.createIndex({ id_local: 1 })
db.partidos.createIndex({ id_visitante: 1 })

// Filtrar partidos pendientes
db.partidos.createIndex({ jugado: 1 })
```