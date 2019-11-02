<template>
  <v-carousel
  height=100vh
  width=100vw
  id='carouselAbout'
  :cycle='true'
  hide-delimiters
  :show-arrows="false"
  >
    <v-carousel-item
    v-for="(image,i) in images"
    :key="'aboutCarouselImage'+i"
    :src="image.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    images: Array
  }
}
</script>
<style scoped>
  #carouselAbout {
    position: fixed;
    z-index:0;
  }
</style>
