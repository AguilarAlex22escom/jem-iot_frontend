import { FC } from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { clsx } from "clsx";
import { socket } from "../../constants";
import styles from "../../styles/components/temperaturedata.module.scss";

const { temperatureData, temperatureStatus, temperatureVoltage } = styles;
const webSocket = io(socket);

export const TemperatureData: FC = () => {
  const [temperature, setTemperature] = useState("0.0");
  const [voltage, useVoltage] = useState("0.0");

  useEffect(() => {
    webSocket.on("temperature", (datasTemperature) => {
      setTemperature(datasTemperature);
    });

    return () => {
      webSocket.off("temperature");
    };
  }, []);

  return (
    <div className={temperatureData}>
      <p className={temperatureStatus}>Valor de temperatura: {temperature}</p>
      <p className={temperatureVoltage}>Valor de voltaje: {voltage}</p>
    </div>
  );
};
