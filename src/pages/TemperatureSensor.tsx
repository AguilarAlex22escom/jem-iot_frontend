import { FC, useState, useEffect } from "react";
import io from "socket.io-client";
// import { Helmet } from 'react-helmet-async';
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
    <main className={temperatureSensor}>
      <section className={temperatureInfo}>
        <h1 className={temperatureTitle}>Sensor de temperatura RTD PT-100</h1>
        <p className={temperatureStatus}>Valor de temperatura: {temperature}</p>
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
  );
};

export default TemperatureSensor;
