import React from 'react';
import styles from './MovieList.module.css';
import CardMovie from '../CardMovie/CardMovie';
import { MovieListProps } from '../../Types/MovieList';

const listarFilmes = ({movies}: MovieListProps) => {
  return movies.map((filme) => (
    <CardMovie key={filme.id} {...filme} />
  ))
}

const MovieList = (movies: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {listarFilmes(movies)}
    </ul>
  )
}

export default MovieList
