<template>
  <div class="home">
    <Carousel/>
    <Projects/>
    <Posts/>
    <FooterView topM="300"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '../components/Home/Carousel'
import Projects from '../components/Home/Projects'
import Posts from '../components/Home/Posts'
import FooterView from '../views/FooterView'

export default {
  name: 'home',
  components: {
    Carousel,
    Projects,
    Posts,
    FooterView
  }
}
</script>
<style scoped>
</style>
