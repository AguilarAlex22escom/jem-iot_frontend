import { FC, useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { io } from "socket.io-client";
import { Card } from "../components/Card";
import { projectName, socket, SensorKeys } from "../constants";
import styles from "../styles/pages/levelsensor.module.scss";

const { levelSensor, levelInfo, levelTitle, levelTank, levelPool, cards } =
  styles;

const webSocket = io(socket);

const LevelSensor: FC = () => {
  const [level, setLevel] = useState("");

  useEffect(() => {
    webSocket.on("dataFromPIC", (data) => {
      setLevel(data);
    });
    return () => {
      webSocket.off("dataFromPIC");
    };
  }, []);

  return (
    <HelmetProvider context={{}}>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{projectName} - Detector de nivel</title>
      </Helmet>
      <main className={levelSensor}>
        <section className={levelInfo}>
          <h1 className={levelTitle}>Sensor detector de nivel HC-SR04</h1>
          <p className={levelTank}>Nivel de agua en el tinaco: {level}</p>
          <p className={levelPool}>Nivel de agua en el pozo: </p>
        </section>
        <section className={cards}>
          <Card
            key={SensorKeys[2]}
            variant="SensorStatus"
            type="Level"
            shadow="Purple"
          >
            Nivel de agua del tinaco.
          </Card>
          <Card
            key={SensorKeys[3]}
            variant="SensorStatus"
            type="Level"
            shadow="Purple"
          >
            Nivel de agua del pozo.
          </Card>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default LevelSensor;
