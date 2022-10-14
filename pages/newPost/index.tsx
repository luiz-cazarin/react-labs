import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import styles from "./NewPost.module.css";

const NewPost = () => {
  const [alert, setAlert] = useState(false);
  const [post, setPost] = useState({
    title: "",
    subtitle: "",
    text: "",
  });

  const sendForm = (event: any) => {
    event.preventDefault();
    const data = {
      title: event.target,
      subtitle: event.target,
      text: event.target,
    };
    setPost(data);

    const res = true;

    if (!alert && res) {
      Router.push("/posts");
    } else {
      setAlert(true);
    }
  };
  return (
    <>
      <Navbar active={false} />
      <div className={styles.body}>
        <div className={styles.header}>
          <h1>NOVA POSTAGEM</h1>
        </div>
        <div className={styles.layout__form}>
          <form onSubmit={sendForm} className={styles.box__form}>
            <label>Titulo</label>
            <input
              placeholder="Informe o titulo"
              type="text"
              name="title"
              id="title"
            />
            <label>Subtitulo</label>
            <input
              placeholder="Informe o subtitulo"
              type="text"
              name="subtitle"
              id="subtile"
            />
            <label>Texto</label>
            <textarea
              name="text"
              id="text"
              placeholder="Informe o conteudo da postagem"
              rows={10}
            ></textarea>
            <button type="submit" value="Submit">
              Criar postagem
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPost;
