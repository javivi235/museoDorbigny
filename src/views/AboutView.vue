<template>
  <v-content>
    <Carousel :images="imagesC" id="CarouselAbout"/>
  </v-content>
</template>
<script>
import Carousel from '../components/About/Carousel.vue'
export default {
  components: {
    Carousel
  },
  data: () => ({
    imagesC: [
      {
        src: require('@/assets/museo.png')
      },
      {
        src: require('@/assets/rana2.jpg')
      }
    ]
  })
}
</script>
<style scoped>
#CarouselAbout{
    position: fixed;
    z-index:0;
    margin-top: 9vh;
}
</style>
