import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { projectName, OptionKeys, socket } from "../constants";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import styles from "../styles/pages/options.module.scss";

const webSocket = io(socket);

const { options, optionsTitle, optionsSection, optionName, optionDescription } =
  styles;

const Options: FC = () => {
  const [character, setCharacter] = useState("");

  const sendChar = (char: string) => {
    setCharacter(char);
    webSocket.emit("sendChar", char);
  };

  return (
    <HelmetProvider context={{}}>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{projectName} - Conozca nuestras opciones</title>
      </Helmet>
      <main className={options}>
        <h1 className={optionsTitle}>Nuestras soluciones de sensores</h1>
        <section className={optionsSection}>
          <Card key={OptionKeys[0]} variant="SensorOption" shadow="Blue">
            <h1 className={optionName}>Temperatura</h1>
            <p className={optionDescription}>
              Sensores de temperatura precisos óptimos para aplicaciones
              industriales.
            </p>
            <Button withShadow variant="Purple">
              <Link to="/temperaturesensor" onClick={() => sendChar('a')}>
                Ir allá
              </Link>
            </Button>
          </Card>
          <Card key={OptionKeys[1]} variant="SensorOption" shadow="Blue">
            <h1 className={optionName}>Electrocardiaco</h1>
            <p className={optionDescription}>
              Sensores detectores de pulsos para dispositivos de uso médico para
              medición de frecuencia cardíaca.
            </p>
            <Button withShadow variant="Purple">
              <Link to="/pulsesensor" onClick={() => sendChar('b')}>Ir allá</Link>
            </Button>
          </Card>
          <Card key={OptionKeys[2]} variant="SensorOption" shadow="Blue">
            <h1 className={optionName}>Ultrasónico</h1>
            <p className={optionDescription}>
              Detectores de nivel optimizados para aplicaciones en sistemas de
              almacenado de líquidos.
            </p>
            <Button withShadow variant="Purple">
              <Link to="/levelsensor" onClick={() => sendChar('c')}>Ir allá</Link>
            </Button>
          </Card>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Options;
