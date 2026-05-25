async function conectar() {
    // const { MongoClient } = require('mongodb');
    // const { URI, DB_NAME } = require('./config');
    // const cliente = new MongoClient(URI);
    // await cliente.connect();
    // return { cliente, db: cliente.db(DB_NAME) };
    return { cliente: null, db: null };
}

module.exports = { conectar };
