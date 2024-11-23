import axios from 'axios'

// Crear una instancia de Axios configurada
const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
})

// Exporta la instancia de Axios
export default api
