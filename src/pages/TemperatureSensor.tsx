import { FC } from "react";
// import { Helmet } from 'react-helmet-async';
import { projectName } from "../constants";
import { TemperatureData } from "../components/TemperatureData";
import styles from "../styles/pages/temperaturesensor.module.scss";

const {
  temperatureSensor,
  temperatureInfo,
  temperatureTitle,
  temperatureRender,
} = styles;

const TemperatureSensor: FC = () => {
  return (
    <>
      {/*<Helmet>
        <title>{projectName} - Sensor de temperatura metálico</title>
      </Helmet>*/}
      <main className={temperatureSensor}>
        <section className={temperatureInfo}>
          <h1 className={temperatureTitle}>Sensor de temperatura RTD PT-100</h1>
          <TemperatureData />
        </section>
        <picture className={temperatureRender}>
          <p>Imagen de termometro</p>
        </picture>
      </main>
    </>
  );
};

export default TemperatureSensor;
