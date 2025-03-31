import React from 'react';
import styles from './MovieSection.module.css'
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../inputText/InputText';
import Button from '../Button/Button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../MovieList/MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/useFilterMovies ';


const MovieSection = () => {

  const { filmes, error, isLoading } = useFetchMovies();
  const { searchTerm, handleSearch, setSearchTerm, filteredMovies } = useFilterMovies(filmes)
 
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variavel='secondary'>
          <InputText
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            placeholder='Buscar filmes...' />
          <Button variavel='icon' aoClicar={handleSearch} >
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  )
}

export default MovieSection
