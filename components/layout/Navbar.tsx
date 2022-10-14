import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../assets/img/labs-logo.png";
import Link from "next/link";

interface Props {
  active: boolean;
}

const Navbar = ({ active }: Props) => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.buttons}>
          <ul>
            <li>
              <Link href={"/"}>
                <a
                  className={
                    active ? styles.buttom__active : styles.buttom__inative
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/posts"}>
                <a>Postagens</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.nav__bottom} />
    </>
  );
};

export default Navbar;
