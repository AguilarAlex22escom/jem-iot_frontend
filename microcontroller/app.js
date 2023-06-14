const {
  SerialPort,
  ByteLengthParser,
} = require("serialport"); /** Se llama al módulo que se
utiliza para la comunicación con el puerto serial. */
const { ReadlineParser } = require("@serialport/parser-readline");

const port = new SerialPort({
  path: "COM4",
  baudRate: 9600,
}); /** Se crea el puerto donde se llevará la comunicación mediante un objeto.
    - "COM4": nombre del puerto serial.
    - {baudRate: 9600}: atributo del objeto SerialPort.
*/
const parser = port.pipe(new ReadlineParser());
/** Permite leer lo que se recibe desde el puerto serial y lo transforma a caracteres. */

// let input = process.openStdin();
port.on("data", (line) => {
  console.log(line.toString());
  /* if (input !== null) {
    port.write(input.toString());
  } */
});

port.on("error", (err) => {
  console.log("Error en comunicación: ", err);
});
