<template>
    <v-container class="contact-form pa-10">
        <v-card raised shaped class="pa-7">
            <v-card-title>Contáctanos</v-card-title>
            <v-card-subtitle class="mt-3">Comunícate con nosotros y nos pondremos en contacto contigo tan pronto como sea posible. ¡Esperamos tener noticias tuyas!</v-card-subtitle>
            <v-card-text class="mt-3">
                <form>
                    <v-text-field
                        label="Nombre"
                        v-model="name"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Correo electrónico"
                        v-model="email"
                        required
                    ></v-text-field>
                    <v-textarea
                    color="teal"
                    v-model="message"
                    required
                    >
                    <template v-slot:label>
                        <div>
                        Mensaje
                        </div>
                    </template>
                    </v-textarea>
                    <v-btn class="success mt-3" @click="saveMessage">Enviar</v-btn>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    saveMessage: function () {
      let message = {
        'name': this.name,
        'email': this.email,
        'message': this.message
      }

      console.log('Guardando...', message)
    }
  }
}
</script>
