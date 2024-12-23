<template>
  <nav>
    <button @click="goHome">Home</button>
    <button @click="goTo('about')">About</button>
    <button @click="goTo('contact')">Contact</button>
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
  gap: 3rem;
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
