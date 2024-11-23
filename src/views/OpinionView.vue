<template>
  <div class="opinion-view">
    <h1>Opinión sobre: {{ gameName }}</h1>
    <opinion-form :gameName="gameName" />
  </div>
</template>

<script>
import OpinionForm from '@/components/OpinionForm.vue'

export default {
  name: 'OpinionView',
  components: {
    OpinionForm,
  },
  data() {
    return {
      gameName: '',
    }
  },
  created() {
    // Captura el parámetro dinámico desde la ruta
    this.gameName = this.$route.params.name || 'Sin nombre'
    console.log('Parámetro recibido:', this.gameName)
  },
}
</script>

<style scoped>
.opinion-view {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}
</style>
