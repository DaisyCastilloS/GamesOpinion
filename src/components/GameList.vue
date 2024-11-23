<template>
  <div class="game-list">
    <h1>Lista de Juegos Disponibles</h1>
    <div class="grid">
      <div class="card" v-for="game in games" :key="game.id">
        <img :src="game.background_image" :alt="game.name" class="game-image" />
        <div class="card-body">
          <h3>{{ game.name }}</h3>
          <p><strong>Rating:</strong> {{ game.rating }}</p>
          <p><strong>Released:</strong> {{ game.released }}</p>
          <p><strong>Update:</strong> {{ game.updated }}</p>
          <div class="card-actions">
            <button @click="goToOpinions(game.name)" class="btn">Opinar</button>
            <button class="btn-favorite">❤️</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'GameList',
  data() {
    return {
      games: [], // Lista de juegos
    }
  },
  methods: {
    async fetchGames() {
      try {
        const response = await api.get('/games', {
          params: {
            ordering: '-rating',
            page_size: 10,
          },
        })
        this.games = response.data.results // Asignar los juegos obtenidos
      } catch (error) {
        console.error('Error al obtener los juegos:', error)
      }
    },
    goToOpinions(gameName) {
      const url = `/opinions/${encodeURIComponent(gameName)}`
      console.log('Redirigiendo a:', url)
      this.$router.push(url)
    },
  },
  mounted() {
    this.fetchGames()
  },
}
</script>

<style scoped>
/* Contenedor principal */
.game-list {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

/* Estilo de la cuadrícula */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Tarjeta de juego */
.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.02);
}

/* Imagen del juego */
.game-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Cuerpo de la tarjeta */
.card-body {
  padding: 1rem;
  text-align: center;
}

.card-body h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card-body p {
  margin: 0.3rem 0;
  color: #555;
}

/* Botones */
.card-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-favorite {
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
