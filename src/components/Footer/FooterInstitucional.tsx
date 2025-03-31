import Link from "../Link/Link";
import styles from "./Footer.module.css";

const FooterInstitucional = () => (
  <div className={styles.institucional}>
    <h3 className={styles.titulo}>Institucional</h3>
    <Link className={styles.ancora}  hiperlink={"#"}>
      Sobre nós
    </Link>
    <Link className={styles.ancora}  hiperlink={"#"}>
      Para empresas
    </Link>
    <Link className={styles.ancora}  hiperlink={"#"}>
      Clube fidelidade
    </Link>
  </div>
);

export default FooterInstitucional;