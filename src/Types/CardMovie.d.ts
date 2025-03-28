import { Categoria,Censura } from '../Types/CategoriaMovie';

export interface MovieProps {
    id: number;
    src: string;
    alt: string;
    titulo: string;
    categoria: Categoria;
    censura: Censura;
    genero: string;
    duracao: number;
  }