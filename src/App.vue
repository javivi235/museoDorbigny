<template>
  <v-app>
    <v-content>
      <Navbar></Navbar>
      <router-view></router-view>
      <FooterView class="Footer"/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
import FooterView from './views/FooterView.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    FooterView
  },
  data: () => ({
    //
  })
}
</script>
<style scoped>
.Footer {
  height: 100vh;
}
</style>
