import { FC, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { SensorKeys, socket } from "../constants";
import { Card } from "../components/Card";
import styles from "../styles/pages/pulsesensor.module.scss";

const { pulseSensor, pulseInfo, pulseTitle, pulseData } = styles;

const webSocket = io(socket);

const PulseSensor: FC = () => {
  const [pulse, setPulse] = useState("");

  useEffect(() => {
    webSocket.on("dataFromPIC", (data) => {
      setPulse(data);
    });
    return () => {
      webSocket.off("dataFromPIC");
    };
  }, []);

  return (
    <main className={pulseSensor}>
      <section className={pulseInfo}>
        <h1 className={pulseTitle}>Sensor contador de pulsos CNY-70</h1>
        <p className={pulseData}>Cantidad de pulsos por minuto: {pulse}</p>
      </section>
      <Card
        key={SensorKeys[1]}
        variant="SensorStatus"
        type="Pulses"
        shadow="Purple"
      >
        <p>Sensor contador de pulsos</p>
      </Card>
    </main>
  );
};

export default PulseSensor;
