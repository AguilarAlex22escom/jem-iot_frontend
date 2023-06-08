import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { projectName } from '../constants';
import styles from '../styles/pages/temperaturesensor.module.scss';

const { temperatureSensor, temperatureInfo, temperatureTitle, temperatureStatus, temperatureRender } = styles;

const TemperatureSensor: FC = () => {
  return (
    <>
      <Helmet>
        <title>{projectName} - Sensor de temperatura metálico</title>
      </Helmet>
      <main className={temperatureSensor}>
        <section className={temperatureInfo}>
            <h1 className={temperatureTitle}>Sensor de temperatura RTD PT-100</h1>
            <p className={temperatureStatus}></p>
        </section>
      </main>
    </>
  );
};

export default TemperatureSensor;
