<template>
  <div class="opinion-form">
    <form @submit.prevent="submitOpinion">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="userName" placeholder="Tu nombre" />
      </div>
      <div class="form-group">
        <label for="opinion">Opinión:</label>
        <textarea
          id="opinion"
          v-model="userOpinion"
          placeholder="Escribe tu opinión aquí..."
          rows="4"
        ></textarea>
      </div>
      <button type="submit">Agregar</button>
    </form>
    <div v-if="opinion">
      <h3>Tu Opinión:</h3>
      <p>
        <strong>{{ opinion.name }}:</strong> {{ opinion.text }}
        <button @click="editOpinion" class="btn-edit">Editar</button>
        <button @click="deleteOpinion" class="btn-delete">Eliminar</button>
      </p>
    </div>
    <div v-else>
      <p class="no-opinion">No existen opiniones para este juego.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpinionForm',
  props: {
    gameName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userName: '',
      userOpinion: '',
      opinion: null,
    }
  },
  methods: {
    submitOpinion() {
      if (this.userName && this.userOpinion) {
        this.opinion = {
          name: this.userName,
          text: this.userOpinion,
        }
        this.userName = ''
        this.userOpinion = ''
      } else {
        alert('Por favor completa todos los campos.')
      }
    },
    editOpinion() {
      this.editing = true
      this.userName = this.opinion.name
      this.userOpinion = this.opinion.text
    },
    deleteOpinion() {
      if (confirm('¿Estás seguro de eliminar tu opinión?')) {
        this.opinion = null
      }
    },
  },
}
</script>

<style scoped>
.opinion-form {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}

.no-opinion {
  color: #f00;
  background-color: #ffecec;
  padding: 1rem;
  border-radius: 5px;
}
.btn-edit {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: #ffc107;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #e0a800;
}

.btn-delete {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: #dc3545; /* Rojo */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: #c82333;
}

.btn-submit {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
