import type { NextPage } from "next";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import art from "../assets/img/test-home.png";

const Home: NextPage = () => {
  return (
    <>
      <Navbar active={true}></Navbar>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <div className={styles.area_text}>
              <h1>Bem vindo!</h1>
              <h2>Front-end</h2>
              <p>
                Site construido com objetivo de mostrar minhas habilidades em
                React, poderia criar apenasa uma pagina com tudo que for
                nescessario, mas pra mostrar que possuo conhecimetos em rotas,
                hooks, next, components e pages
              </p>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button}>Postagens</button>
              <button className={styles.button}>Contato</button>
            </div>
          </div>
          <div className={styles.image}>
            <Image src={art} alt="art" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
