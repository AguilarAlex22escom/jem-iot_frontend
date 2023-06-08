import { FC } from "react";
// import { Helmet } from "react-helmet-async";
import { projectName } from "../constants";
import { Button } from "../components/Button";
import styles from "../styles/pages/home.module.scss";

const { home, homeActions, homeTitle, homeImage } = styles;

const Home: FC = () => {
  return (
    <>
      {/*<Helmet>
        <title>{projectName} - Bienvenidx</title>
        <meta charSet="UTF-8" />
        <meta
          name="home page"
          content="Página principal de la empresa JEM IoT"
        />
  </Helmet>*/}
      <main className={home}>
        <div className={homeActions}>
          <p className={homeTitle}>{projectName}</p>
          <Button withShadow variant="Green">
            <a href="/">Comenzar</a>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
