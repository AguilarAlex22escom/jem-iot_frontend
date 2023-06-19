import { FC, useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import io from "socket.io-client";
import { projectName, SensorKeys, socket } from "../constants";
import { Card } from "../components/Card";
import styles from "../styles/pages/temperaturesensor.module.scss";

const {
  temperatureSensor,
  temperatureInfo,
  temperatureTitle,
  temperatureStatus,
} = styles;

const webSocket = io(socket);

const TemperatureSensor: FC = () => {
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    webSocket.on("dataFromPIC", (data) => {
      setTemperature(data);
    });
    return () => {
      webSocket.off("dataFromPIC");
    };
  }, []);

  return (
    <HelmetProvider context={{}}>
      <Helmet>
        <Helmet>
          <meta charSet="UTF-8" />
          <title>{projectName} - Sensor de temperatura</title>
        </Helmet>
      </Helmet>
      <main className={temperatureSensor}>
        <section className={temperatureInfo}>
          <h1 className={temperatureTitle}>Sensor de temperatura RTD PT-100</h1>
          <p className={temperatureStatus}>
            Valor de temperatura: {temperature}
          </p>
        </section>
        <Card
          key={SensorKeys[0]}
          variant="SensorStatus"
          type="Temperature"
          shadow="Purple"
        >
          <p>Sensor de temperatura</p>
        </Card>
      </main>
    </HelmetProvider>
  );
};

export default TemperatureSensor;
