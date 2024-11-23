<template>
  <nav>
    <button @click="goHome">Home</button>
  </nav>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  background-color: #333;
  color: white;
  padding: 1rem;
}
button {
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
}
button:hover {
  text-decoration: underline;
}
</style>
