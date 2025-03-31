import { useEffect, useState } from 'react'
import { MovieProps } from '../Types/CardMovie'

const useFilterMovies = (filmes: MovieProps[]) => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [filteredMovies, setFilteredMovies] = useState<MovieProps[]>([])

    useEffect(() => {
        setFilteredMovies(filmes)
      }, [filmes])

      const handleSearch = () => {
        const filtered = filmes.filter((filme) => {
            return filme.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        });
        setFilteredMovies(filtered)
    }


    return { searchTerm, setSearchTerm, filteredMovies, handleSearch };
}
export default useFilterMovies 
