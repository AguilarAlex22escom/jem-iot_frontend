import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { projectName, OptionKeys } from "../constants";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import styles from "../styles/pages/options.module.scss";

const { options, optionsTitle, optionsSection, optionName, optionDescription } =
  styles;

const Options: FC = () => {
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
              <a href="/temperaturesensor">Ir allá</a>
            </Button>
          </Card>
          <Card key={OptionKeys[1]} variant="SensorOption" shadow="Blue">
            <h1 className={optionName}>Electrocardiaco</h1>
            <p className={optionDescription}>
              Sensores detectores de pulsos para dispositivos de uso médico para
              medición de frecuencia cardíaca.
            </p>
            <Button withShadow variant="Purple">
              <a href="/pulsesensor">Ir allá</a>
            </Button>
          </Card>
          <Card key={OptionKeys[2]} variant="SensorOption" shadow="Blue">
            <h1 className={optionName}>Ultrasónico</h1>
            <p className={optionDescription}>
              Detectores de nivel optimizados para aplicaciones en sistemas de
              almacenado de líquidos.
            </p>
            <Button withShadow variant="Purple">
              <a href="/levelsensor">Ir allá</a>
            </Button>
          </Card>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Options;
