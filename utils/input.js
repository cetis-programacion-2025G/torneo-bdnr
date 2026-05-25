// utils/input.js — Funciones de entrada del usuario

const readline = require('./readline');

function preguntar(msg) {
    return readline(msg).then(r => r.trim());
}

async function pedirEntero(msg, validos) {
    while (true) {
        const valor = parseInt(await preguntar(msg + ': '), 10);
        if (validos.includes(valor)) return valor;
        console.log(`  Opcion invalida (${validos.join(', ')}), intenta de nuevo.`);
    }
}

async function esperarEnter() {
    await preguntar('\nPresiona Enter para continuar...');
}

module.exports = { preguntar, pedirEntero, esperarEnter };
