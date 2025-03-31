import { MovieProps } from '../Types/CardMovie'
import axios from 'axios'

export const filme = async (): Promise<MovieProps[]> => {
    const BASE_URL = "http://localhost:3001"
    const resposta = await axios.get<MovieProps[]>(`${BASE_URL}/Movies`)
    return resposta.data
}
