import React, { useEffect, useState } from 'react';
import styles from './MovieSection.module.css'
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../inputText/InputText';
import Button from '../Button/Button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../MovieList/MovieList';
import { MovieProps } from '../../Types/CardMovie';


const MovieSection = () => {

  const [filmes,setFilme] = useState<MovieProps[]>([])

  useEffect(() => {

    setFilme([
      {
          id: 1,
          src: "./Imagens/Cardsfilmes/Card - Amanhecer.jpg",
          alt: "Imagem do filme Amanhecer",
          titulo: "Amanhecer",
          categoria: "2D",
          censura: "12 anos",
          genero: "Romance",
          duracao: 90,
      },
      {
          id: 2,
          src: "./Imagens/Cardsfilmes/Card - Amigo da sombra.png",
          alt: "Imagem do filme Amigo da sombra",
          titulo: "Amigo da sombra",
          categoria: "2D",
          censura: "12 anos",
          genero: "Suspense",
          duracao: 110,
      },
      {
          id: 3,
          src: "./Imagens/Cardsfilmes/Card - Amigos do bosque mágico.png",
          alt: "Imagem do filme Amigo do bosque mágico",
          titulo: "Amigo do bosque mágico",
          categoria: "2D",
          censura: "Livre",
          genero: "Animação",
          duracao: 60,
      },
      {
          id: 4,
          src: "./Imagens/Cardsfilmes/Card - Caminho para o abismo.png",
          alt: "Imagem do filme Caminho para o abismo",
          titulo: "Caminho para o abismo",
          categoria: "2D",
          censura: "14 anos",
          genero: "Horror",
          duracao: 103,
      },
      {
          id: 5,
          src: "./Imagens/Cardsfilmes/Card - Desastres do Escritório.png",
          alt: "Imagem do filme Desastres do Escritório",
          titulo: "Desastres do Escritório",
          categoria: "2D",
          censura: "Livre",
          genero: "Comédia",
          duracao: 85,
      },
      {
          id: 6,
          src: "./Imagens/Cardsfilmes/Card - Mestres do futuro.png",
          alt: "Imagem do filme Mestres do Futuro",
          titulo: "Mestres do Futuro",
          categoria: "2D",
          censura: "Livre",
          genero: "Documentário",
          duracao: 120,
      },
      {
          id: 7,
          src: "./Imagens/Cardsfilmes/Card - La Esperanza.png",
          alt: "Imagem do filme La Esperanza",
          titulo: "La Esperanza",
          categoria: "2D",
          censura: "12 anos",
          genero: "Drama",
          duracao: 98,
      },
      {
          id: 8,
          src: "./Imagens/Cardsfilmes/Card - O nexus do tempo.png",
          alt: "Imagem do filme O nexus do tempo",
          titulo: "O nexus do tempo",
          categoria: "3D",
          censura: "10 anos",
          genero: "Ficcção Científica",
          duracao: 105,
      },
    ])

  },[])

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variavel='secondary'>
          <InputText placeholder='Buscar filmes...' />
          <Button variavel='icon'>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={filmes} />
      </section>
    </main>
  )
}

export default MovieSection
