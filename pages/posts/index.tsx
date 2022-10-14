import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import CardItem from "../../components/posts/card-item";
import styles from "./Posts.module.css";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      title: "Title",
      subtitle: "Subtitle",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
  ]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <>
      <Navbar active={false}></Navbar>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1>POSTAGENS</h1>
          <Link href="/newPost">
            <button>Nova Postagem</button>
          </Link>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              {posts.map((el) => {
                return (
                  <>
                    <CardItem
                      title={el.title}
                      subtitle={el.subtitle}
                      text={el.text}
                    />
                  </>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;
