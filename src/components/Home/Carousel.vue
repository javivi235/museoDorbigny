<template>
  <div >
      <v-carousel id='carousel' :cycle='true'>
            <v-carousel-item  src="@/assets/test1.jpg"/>
            <v-carousel-item  src="@/assets/test2.jpg"/>

      </v-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>

<style scoped>

#carousel{
    position: fixed;
    z-index:0;
    height: 100vh !important;
}

</style>
