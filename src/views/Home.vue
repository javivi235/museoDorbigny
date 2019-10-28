<template>
  <div class="home">
    <Carousel/>
    <Projects/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '../components/Home/Carousel'
import Projects from '../components/Home/Projects'
import Footer from '../views/FooterView'

export default {
  name: 'home',
  components: {
    Carousel,
    Projects,
    Footer
  }
}
</script>
