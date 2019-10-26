<template>
  <v-app>
    <v-content>
      <Navbar></Navbar>
      <router-view></router-view>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
import Footer from './views/FooterView'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
<style scoped>
</style>
