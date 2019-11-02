<template>
  <div class="home">
    <Carousel/>
    <Projects/>
    <Posts/>
  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '../components/Home/Carousel'
import Projects from '../components/Home/Projects'
import Posts from '../components/Home/Posts'

export default {
  name: 'home',
  components: {
    Carousel,
    Projects,
    Posts
  }
}
</script>
