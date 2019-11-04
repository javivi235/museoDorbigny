<template>
    <div id="SingleSectionDiv">
        <h1 id="sectionTitle">Mineralogia</h1>
        <h4 id="bodyText"> {{text}}</h4>

        <v-carousel id='sectionCarousel' hide-delimiters='true' cycle=true>
           <v-carousel-item class="postCarouselItem" src="@/assets/Minerologia.jpg"/>
           <v-carousel-item class="postCarouselItem" src="@/assets/Minerologia2.jpg"/>
           <v-carousel-item class="postCarouselItem" src="@/assets/Minerologia3.jpg"/>
       </v-carousel>
    </div>
</template>
<script>

export default {
  name: 'home',
  data: () => ({
    text: 'La mineralogía es la rama de la geología que estudia las propiedades físicas y químicas de los minerales que se encuentran en el planeta en sus diferentes estados de agregación. Un mineral es un sólido inorgánico de origen natural, que presenta una composición química definida. Los minerales aportan al ser humano los elementos químicos imprescindibles para sus actividades industriales. El estudio de los minerales se puede dividir en seis grandes grupos'
  }),
  components: {

  }
}
</script>

<style scoped>

    #SingleSectionDiv{
        width: 100vw;
        height: 100vh;
    }

    #sectionTitle{
        position: absolute;
        left: 6vw;
        top: 10vh;
    }

    #bodyText{
        position: absolute;
        text-align: justify;
        width: 35vw;
        left: 5vw;
        top: 25vh
    }
    #sectionCarousel{
        position:absolute;
        width: 45vw;
        height: 55vh !important;
        left: 50vw;
        top: 17vh;
    }
</style>
