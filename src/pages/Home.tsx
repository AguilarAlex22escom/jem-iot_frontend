import { FC } from "react";
// import { Helmet } from "react-helmet-async";
import { projectName, socket } from "../constants";
import { Button } from "../components/Button";
import styles from "../styles/pages/home.module.scss";

const { home, homeActions, homeTitle, homeImage } = styles;

const Home: FC = () => {
  return (
    <main className={home}>
      <div className={homeActions}>
        <h1 className={homeTitle}>{projectName}</h1>
        <Button withShadow variant="Green">
          <a href="/options">Comenzar</a>
        </Button>
      </div>
      <picture> </picture>
    </main>
  );
};

export default Home;
