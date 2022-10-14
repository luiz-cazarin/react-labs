import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <>
      <Navbar active={false}></Navbar>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1>POSTAGENS</h1>
          <div>
            <Link href="/newPost">
              <button>Editar</button>
            </Link>
            <Link href="/newPost">
              <button>Apagar</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
