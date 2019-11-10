<template>
  <div>
    <v-card class="mx-auto my-12 pa-5" max-width="95vw">
      <v-card-title>{{ title }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-row no-gutters>
          <v-col>
            <div class="my-4 subtitle-1 black--text">
              Fecha de publicación: {{ date }}
            </div>
          </v-col>
          <v-col>
            <div class="my-4 subtitle-1 black--text">
              Autor: {{ author }}
            </div>
          </v-col>
        </v-row>
        <div>{{ description }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn class="mt-5" color="success accent-4" @click="readMore">
          Leer más
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    author: String,
    date: String,
    description: String
  },
  methods: {
    readMore: function () {
      this.$router.push('/post?id=' + this.id)
    }
  }
}
</script>
