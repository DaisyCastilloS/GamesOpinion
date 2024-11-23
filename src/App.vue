<!-- src/App.vue -->

<script>
import GameList from '@/components/GameList.vue'

export default {
  name: 'App',
  components: {
    GameList,
  },
}
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>
