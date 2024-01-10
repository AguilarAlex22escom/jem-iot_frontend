/* import React from "react";
import { FC } from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { clsx } from "clsx";
import { socket } from "../src/constants";


const webSocket = io(socket);

export const TemperatureData = () => {
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
    <div className="temperatureStatus">
      <p className="temperatureData">Valor de temperatura: {temperature}</p>
      <p className="temperatureVoltage">Valor de voltaje: {voltage}</p>
    </div>
  );
} */