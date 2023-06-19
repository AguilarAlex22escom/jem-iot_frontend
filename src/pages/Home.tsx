import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { projectName } from "../constants";
import { Button } from "../components/Button";
import styles from "../styles/pages/home.module.scss";

const { home, homeActions, homeTitle, homeImage } = styles;

const Home: FC = () => {
  return (
    <HelmetProvider context={{}}>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{projectName} - Bienvenida a la página principal</title>
      </Helmet>
      <main className={home}>
        <div className={homeActions}>
          <h1 className={homeTitle}>{projectName}</h1>
          <Button withShadow variant="Green">
            <a href="/options">Comenzar</a>
          </Button>
        </div>
        <picture className={homeImage}> </picture>
      </main>
    </HelmetProvider>
  );
};

export default Home;
