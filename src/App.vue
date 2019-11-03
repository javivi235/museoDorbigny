<template>
  <v-app>
    <v-content>
      <Navbar ref="navbar"></Navbar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  })
}
</script>
<style scoped>
</style>
