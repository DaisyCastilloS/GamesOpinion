<!-- OpinionForm.vue -->
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
      <button type="submit" class="btn-submit">Agregar</button>
    </form>

    <div v-if="opinion" class="opinion-display">
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

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

/* 📝 Formulario principal */
.opinion-form {
  text-align: center;

  form {
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: $secondary-color;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid $light-gray;
    border-radius: 5px;
  }
}

/* ✅ Botones con mixins */
.btn-submit {
  @include button-styles($primary-color, $green, color.scale($primary-color, $lightness: -10%));
}

.btn-edit {
  @include button-styles($warning-color, $black, color.scale($warning-color, $lightness: -10%));
}

.btn-delete {
  @include button-styles($danger-color, $green, color.scale($danger-color, $lightness: -10%));
}

/* 📝 Sin opiniones */
.no-opinion {
  color: $danger-color;
  background-color: adjust-color($danger-color, $lightness: 40%);
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
}

/* ✅ Opinión desplegada */
.opinion-display {
  margin-top: 2rem;
  text-align: left;
  background-color: $light-gray;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid $secondary-color;

  h3 {
    color: $primary-color;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
}
</style>
