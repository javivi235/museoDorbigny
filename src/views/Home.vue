<template>
  <div class="home">
    <Carousel/>
    <Projects/>
    <Posts/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '../components/Home/Carousel'
import Projects from '../components/Home/Projects'
import Posts from '../components/Home/Posts'
import Footer from '../views/FooterView'

export default {
  name: 'home',
  components: {
    Carousel,
    Projects,
    Posts,
    Footer
  }
}
</script>
