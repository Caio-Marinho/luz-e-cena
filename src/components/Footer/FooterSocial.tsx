import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Link from "../Link/Link";
import styles from "./Footer.module.css";

const FooterSocial = () => (
  <div className={styles.redes}>
    <h3 className={styles.titulo}>Siga nossas redes:</h3>
    <div className={styles.icones}>
      <Link  hiperlink={"#"}>
        <FaWhatsapp className={styles.icone} />
      </Link>
      <Link hiperlink={"#"}>
        <FaInstagram className={styles.icone} />
      </Link>
      <Link hiperlink={"#"}>
        <FaTiktok className={styles.icone} />
      </Link>
    </div>
  </div>
);

export default FooterSocial;