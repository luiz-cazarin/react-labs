import Navbar from "../../components/layout/Navbar";
import CardItem from "../../components/posts/card-item";
import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <>
      <Navbar active={false}></Navbar>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1>POSTAGENS</h1>
          <button>Nova Postagem</button>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <CardItem
                title="Title"
                subtitle="Subtitle"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged."
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;
