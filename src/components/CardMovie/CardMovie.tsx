import React from "react";
import styles from "./CardMovie.module.css";
import Tag from "../Tag/Tag";
import { MovieProps } from "../../Types/CardMovie";

const CardMovie = (props: MovieProps) => {
  const { alt, src, titulo, genero, categoria, censura, duracao } = props;
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{titulo}</h3>
        <div className={styles.informacoes}>
          <div className={styles.linha1}>
            <p>{genero}</p>
            <Tag valor={categoria} />
          </div>
          <div className={styles.linha2}>
            <p>{duracao} minutos</p>
            <Tag valor={censura} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;