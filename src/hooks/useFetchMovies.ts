import { useEffect, useState } from 'react'
import { filme } from '../api/filme';
import { MovieProps } from '../Types/CardMovie';

const useFetchMovies = () => {
    const [filmes, setFilme] = useState<MovieProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    const listarFilmes = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const filmes = await filme()
            setFilme(filmes)
           
        } catch (err) {
            setError("Erro ao buscar filmes. Tente novamente");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        listarFilmes()
    }, [])
    return { filmes, isLoading, error }
}

export default useFetchMovies
