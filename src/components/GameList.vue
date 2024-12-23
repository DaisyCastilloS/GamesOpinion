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
            <button @click="goToOpinions(game.name)" class="btn-primary">Opinar</button>
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
      games: [],
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
        this.games = response.data.results
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

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

/* ✅ Contenedor principal */
.game-list {
  padding: 2rem;
  font-family: $font-family-base;
  color: $primary-color;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: $primary-color;
  }
}

/* ✅ Cuadrícula de tarjetas */
.grid {
  @include grid-layout(auto-fit, 300px, 2rem);
}

/* ✅ Tarjeta */
.card {
  @include game-card;
}

/* ✅ Imagen de la tarjeta */
.game-image {
  @include responsive-image(200px);
}

/* ✅ Botones */
.card-actions {
  margin-top: 1rem;
  @include center-element;
  gap: 1rem;

  .btn-primary {
    @include button-styles($primary-color, $white, color.scale($primary-color, $lightness: -10%));
  }

  .btn-favorite {
    @include favorite-button($danger-color);
  }
}
</style>
