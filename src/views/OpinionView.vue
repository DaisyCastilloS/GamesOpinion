<!-- OpinionView.vue -->
<template>
  <div class="opinion-view">
    <section class="opinion-section">
      <OpinionForm gameName="Juego Ejemplo" />
    </section>
  </div>
</template>

<script>
import OpinionForm from '@/components/OpinionForm.vue'

export default {
  name: 'OpinionView',
  components: {
    OpinionForm,
  },
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

/* ✅ Contenedor de la vista */
.opinion-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: $light-gray;
}

/* ✅ Sección donde se monta el formulario */
.opinion-section {
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  background-color: $white;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba($black, 0.1);
}
</style>
