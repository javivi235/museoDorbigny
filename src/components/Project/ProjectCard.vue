<template>
  <div>
    <v-card class="mx-auto" max-width="70vw">
      <v-img class="white--text align-end" :src="getImageURL()">
        <v-card-title>{{ title }}</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div>{{ description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="green" text @click="readMore">
          Leer más
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { backendURL } from '@/data.js'

export default {
  props: {
    projectID: Number,
    title: String,
    description: String,
    image: Object
  },
  methods: {
    readMore: function () {
      this.$router.push('/post?id=' + this.projectID + '&type=proyectos')
    },
    getImageURL: function () {
      return backendURL + this.image.url
    }
  }
}
</script>
