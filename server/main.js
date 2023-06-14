/** Librerías para conexión circuito-servidor. */
// NOTA: El servidor es la parte con la que realizamos el envío y recepción de datos, tanto del lado del circuito,
// como en el lado de la interfaz gráfica.
const {
  SerialPort,
  ByteLengthParser,
} = require("serialport"); /** Se llama al módulo que se
utiliza para la comunicación con el puerto serial. */
const { ReadlineParser } = require("@serialport/parser-readline");

/** Librerías para comunicación servidor-interfaz */
const express = require("express");
const http = require("http");
const path = require("path");
const morgan = require("morgan");
const socketIO = require("socket.io");

const app = express();

/** Configuración del servidor */
app.set("port", process.env.PORT || 3000);

/** Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/** Rutas */
/* app.get("/", (req, res) => {
  res.sendFile("../tests/index.html");
}); */

/** Configuración del puerto serial. */
// NOTA: En el lado del servidor no es necesario establecer el protocolo RS232, pues viene por
// al trabajar con el módulo de seriaport por defecto.
const port = new SerialPort({
  path: "COM4",
  baudRate: 9600,
}); /** Se crea el puerto donde se llevará la comunicación mediante un objeto.
    - "COM4": nombre del puerto serial.
    - {baudRate: 9600}: atributo del objeto SerialPort.
*/

/** Configuración de protocolo HTTP para conexión de interfaz con la red. */
const server = http.createServer(app);

/** Configuración del 'socket' que realiza la comunicación de los datos obtenidos por el puerto serial hacía el servidor. */
// NOTA: Un socket se trata de un canal de comunicación que permite el intercambio
// de información entre programas de distinto uso y entre redes.
const io = socketIO(server);

const parser = port.pipe(new ReadlineParser());
/** Permite leer lo que se recibe desde el puerto serial y lo transforma a caracteres. */

io.on("connection", (socket) => {
  console.log("Interfaz conectada...\n");

  socket.on("disconnect", () => {
    console.log("Interfaz desconectada");
  });
});

port.on("data", (line) => {
  console.log("Microcontrolador conectado...\n");
  console.log(line.toString());
  const data = line.toString();
  io.sockets.emit("dataFromPIC", data);
}); /** Recibe los datos del microcontrolador y los envía a la interfaz correspondiente mediante el servidor. */

port.on("error", (err) => {
  console.log("Error en comunicación: ", err);
}); /** Notifica la existencia de un error en el envío de los datos del PIC al programa de servidor. */

/** Inicializa el servidor mediante protocolo HTTP. */
// NOTA: 'escuchar' se utiliza para hablar acerca de la apertura de una fuente de datos de un programa
// en un puerto específico, en el contexto de desarrollo Web.
server.listen(app.get("port"), () => {
  console.log("Servidor escuchando en el puerto " + app.get("port"));
});
