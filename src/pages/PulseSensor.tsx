import { FC, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { projectName, SensorKeys, socket } from "../constants";
import { Card } from "../components/Card";
import styles from "../styles/pages/pulsesensor.module.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider context={{}}>
      <Helmet>
      <meta charSet="UTF-8" />
        <title>{projectName} - Contador de pulsos</title>
      </Helmet>
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
    </HelmetProvider>
    
  );
};

export default PulseSensor;
