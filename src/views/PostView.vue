<template>
  <div class="pl-10 pr-10">
    <p v-if="error">No se encontró ninguna publicación</p>
    <v-content class="post pa-10">
      <h2>{{ title }}</h2>
      <div v-html="html"></div>
    </v-content>
  </div>
</template>

<script>
import axios from 'axios'

import { backendURL } from '@/data.js'

export default {
  data: function () {
    return {
      title: String,
      html: String,
      error: Boolean
    }
  },
  mounted: function () {
    let id = this.$route.query.id

    axios
      .get(backendURL + '/publicaciones?id=' + id)
      .then(response => {
        if (response.data.length === 1) {
          this.error = false

          let showdown = require('showdown')
          let converter = new showdown.Converter()
          converter.setOption('simplifiedAutoLink', true)

          this.html = converter.makeHtml(response.data[0].cuerpo)
          this.html = this.html.replace(/<img/g, '<img style="width: 75%; height: auto;"')

          this.title = response.data[0].titulo
        } else {
          this.error = true
        }
      })
  }
}
</script>

<style scoped>
.post {
  width: 75vw;
  margin: 0 auto
}
</style>
