import Navbar from "../../components/layout/Navbar";
import styles from "./About.module.css";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import profile from "../../assets/img/art-contact.svg";
const Posts = () => {
  return (
    <div>
      <Navbar active={false}></Navbar>
      <div className={styles.body}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <div className={styles.area_text}>
              <h1>Luiz Claudio</h1>
              <h2>Full-Stack Developer</h2>
              <p>
                Buscando uma oportunidade de mostrar minhas habilidades e meus
                conhecimentos, contribuindo em grandes projetos, tenho
                exeperiencia como full-stack e tenho interece em trabalhar com
                front-end
              </p>
            </div>
            <div className={styles.socials}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/luiz-claudio-cazarin/"
                className={styles.card__social}
              >
                <AiFillLinkedin size={60} />
              </a>
              <a
                href="mailto:cazarin.junior@gmail.com"
                className={styles.card__social}
              >
                <MdEmail size={60} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=5561983017727"
                className={styles.card__social}
              >
                <IoLogoWhatsapp size={60} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luiz-cazarin"
                className={styles.card__social}
              >
                <BsGithub size={60} />
              </a>
            </div>
          </div>
          <div className={styles.image}>
            <Image src={profile} alt="profile"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
