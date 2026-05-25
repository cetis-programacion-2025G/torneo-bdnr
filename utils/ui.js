// utils/ui.js — Funciones de interfaz de usuario

function centrar(texto, ancho) {
    const largo = [...texto].length;
    const espacios = ancho - largo;
    if (espacios <= 0) return texto;
    const izq = Math.floor(espacios / 2);
    const der = espacios - izq;
    return ' '.repeat(izq) + texto + ' '.repeat(der);
}

function titulo(texto, ancho = 44) {
    console.log('╔' + '═'.repeat(ancho) + '╗');
    console.log('║' + centrar(texto, ancho) + '║');
    console.log('╚' + '═'.repeat(ancho) + '╝');
}

function limpiarPantalla() {
    process.stdout.write('\x1Bc');
}

function dibujarTabla(filas, columnas) {
    const sep = columnas.map(c => '+' + '-'.repeat(c.ancho + 2)).join('') + '+';

    console.log(sep);
    const header = columnas.map(c =>
        '| ' + String(c.titulo).padEnd(c.ancho).slice(0, c.ancho) + ' '
    ).join('') + '|';
    console.log(header);
    console.log(sep);

    if (!filas || filas.length === 0) {
        const anchoTotal = sep.length - 2;
        console.log('| ' + centrar('(sin registros)', anchoTotal) + ' |');
    } else {
        for (const fila of filas) {
            const linea = columnas.map(c => {
                const val = String(fila[c.clave] ?? '').slice(0, c.ancho).padEnd(c.ancho);
                return '| ' + val + ' ';
            }).join('') + '|';
            console.log(linea);
        }
    }
    console.log(sep);
}

module.exports = { centrar, titulo, limpiarPantalla, dibujarTabla };
