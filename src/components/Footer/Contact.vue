<template>
    <v-content>
        <v-card id="f-contact" dark class="elevation-0">
            <v-card-title>Contacto</v-card-title>
            <v-list-item two-line>

                <v-list-item-content>
                    <v-list-item-title class="headline">Email</v-list-item-title>
                    <v-list-item-subtitle id="f-email">{{ email }}</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>

            <v-list-item two-line>

                <v-list-item-content>
                    <v-list-item-title id="f-phone" class="headline">Teléfono</v-list-item-title>
                    <v-list-item-subtitle id="f-number">{{ phone }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item four-line>

                <v-list-item-content>
                    <v-list-item-title id="f-direction" class="headline">Dirección</v-list-item-title>
                    <v-list-item-subtitle id="f-name">{{ name }}</v-list-item-subtitle>
                    <v-list-item-subtitle id="f-adress">{{ address }}</v-list-item-subtitle>
                    <v-list-item-subtitle id="f-city">{{ city }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-content>
</template>
<script>
import axios from 'axios'

import { backendURL } from '@/data.js'

export default {
  name: 'Contact',
  data: function () {
    return {
      name: '',
      phone: '',
      email: '',
      address: '',
      city: ''
    }
  },
  mounted: function () {
    axios
      .get(backendURL + '/footers')
      .then(response => {
        let contactInfo = response.data[0]

        this.name = contactInfo.nombre
        this.phone = contactInfo.telefono
        this.email = contactInfo.email
        this.address = contactInfo.direccion
        this.city = contactInfo.ciudad
      })
  }
}
</script>
<style scoped>

</style>
