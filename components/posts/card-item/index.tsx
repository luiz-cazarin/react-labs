import Router from "next/router";
import styles from "./CardItem.module.css";

interface Props {
  title: string;
  subtitle: string;
  text: string;
}

const CardItem = ({ title, subtitle, text }: Props) => {
  function goToPost() {
    Router.push("/post");
  }
  return (
    <div className={styles.box__content} onClick={goToPost}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h5>{text}</h5>
    </div>
  );
};

export default CardItem;
