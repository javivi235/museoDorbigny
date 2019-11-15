<template>
    <v-container class="contact-form pa-10">
        <v-card id="contact-contact" raised shaped class="pa-7">
            <v-card-title>Contáctanos</v-card-title>
            <v-card-subtitle class="mt-3">Comunícate con nosotros y nos pondremos en contacto contigo tan pronto como sea posible. ¡Esperamos tener noticias tuyas!</v-card-subtitle>
            <v-card-text class="mt-3">
                <form>
                    <v-text-field id="contact-name"
                        label="Nombre"
                        v-model="name"
                        required
                    ></v-text-field>
                    <v-text-field id="contact-mail"
                        label="Correo electrónico"
                        v-model="email"
                        required
                    ></v-text-field>
                    <v-textarea id="contact-message"
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
                    <v-btn id="contact-send" class="success mt-3" @click="saveMessage">Enviar</v-btn>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'

import { backendURL } from '@/data.js'

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
        'nombre': this.name,
        'correo': this.email,
        'mensaje': this.message
      }

      axios.post(backendURL + '/contactos', message)

      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
