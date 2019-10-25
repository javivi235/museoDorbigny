<template>
  <v-app>
    <v-content>
      <router-view></router-view>\
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
import Footer from './views/FooterView'

export default {
  name: 'App',
  components: {
    Footer
  },
  data: () => ({
    //
  })
}
</script>
<style scoped>
</style>
