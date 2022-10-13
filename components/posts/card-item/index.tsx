import styles from "./CardItem.module.css";

interface Props {
  title: string;
  subtitle: string;
  text: string;
}

const CardItem = ({ title, subtitle, text }: Props) => {
  return (
    <div className={styles.box__content}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h5>{text}</h5>
    </div>
  );
};

export default CardItem;
