<template>
  <v-app>
    <v-content>
      <div v-if="load">
        <LoadingView :load="load" @terminarCarga="terminarCarga"/>
      </div>
      <div v-else>
        <Navbar ref="navbar"></Navbar>
        <transition name="fade"
          v-on:before-enter="beforeEnter">
          <router-view></router-view>
        </transition>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
import LoadingView from './views/LoadingView.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    LoadingView
  },
  data: () => ({
    load: true
  }),
  methods: {
    beforeEnter () {
      this.load = true
    },
    terminarCarga () {
      this.load = false
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
