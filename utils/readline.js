const rl = require("readline");

function readline(mensaje = "") {
  const interfaz = rl.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    interfaz.question(mensaje, (respuesta) => {
      interfaz.close();
      resolve(respuesta);
    });
  });
}

module.exports = readline;
