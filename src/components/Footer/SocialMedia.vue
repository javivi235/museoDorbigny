<template>
    <v-content>
        <v-card id="f-social" dark class="elevation-0">
            <v-card-title>
                Redes Sociales:
            </v-card-title>
            <v-row>
                <v-col cols="1">
                </v-col>
                <v-col cols="1">
                  <v-icon class="icon" id="f-instagram" large @click="openInstagram">mdi-instagram</v-icon>
                </v-col>
                <v-col cols="1">
                  <v-icon class="icon" id="f-facebook" large @click="openFacebook">mdi-facebook</v-icon>
                </v-col>
                <v-col cols="1">
                  <v-icon class="icon" id="f-twitter" large @click="openTwitter">mdi-twitter</v-icon>
                </v-col>
                <v-col cols="1">
                  <v-icon class="icon" id="f-whatsapp" large @click="openWhatsApp">mdi-whatsapp</v-icon>
                </v-col>
            </v-row>
        </v-card>
    </v-content>
</template>
<script>
export default {
  methods: {
    openInstagram () {
      window.location.href = 'https://www.instagram.com/museodorbigny'
    },
    openFacebook () {
      window.location.href = 'https://www.facebook.com/MUSEOdOrbigny/'
    },
    openTwitter () {
      window.location.href = 'https://twitter.com/museodorbigny'
    },
    openWhatsApp () {
      window.location.href = 'https://api.whatsapp.com/send?phone=59160367230&text=Consulta'
    }
  }
}
</script>
<style scoped>
</style>
