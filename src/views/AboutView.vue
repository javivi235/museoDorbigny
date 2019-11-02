<template>
  <div class="page">
    <Carousel :images="imagesC"/>
    <Information
    id="QuienesSomos"
    color="#FFFFFF"
    :overview="quienesSomos.overview"
    :title="quienesSomos.title"
    :content="quienesSomos.content"
    :img="quienesSomos.img"/>
    <Information
    id="Vision"
    color="#DEDEDE"
    :overview="vision.overview"
    :title="vision.title"
    :content="vision.content"
    :img="vision.img"
    />
  </div>
</template>
<script>
import Carousel from '../components/About/Carousel.vue'
import Information from '../components/About/Information.vue'
export default {
  components: {
    Carousel,
    Information
  },
  data: () => ({
    imagesC: [
      {
        src: require('@/assets/museo.png')
      },
      {
        src: require('@/assets/rana2.jpg')
      }
    ],
    quienesSomos: {
      overview: 'Quienes Somos',
      title: 'MUSEO DE HISTORIA NATURAL "ALCIDE D\'ORBIGNY" DE COCHABAMBA',
      content: 'Somos una institución dinamica que trabaja para conservar la biodiversidad en Bolivia a tráves de la realización de proyectos de investigación, conservación de colecciones científicas y programas de difusión y comunicación a la sociedad. \n' +
      'Nuestras áreas de acción son la paleontología, cambios climáticos, estudio de invertebrados y vertebrados, estudios de plantas, biología molecular y apoyo a la educación.\n' +
      'Por la gran labor que realizamos, el 30 de Octubre de 2014 hemos  sido declarados como "Patrimonio Cultural y Natural del Estado Plurinacional de Bolivia", además de ser reconocidos por la Academia Nacional de Ciencias de Bolivia como repositorio nacional.',
      img: require('@/assets/museo1.jpg')
    },
    vision: {
      overview: 'Nuestra Vision',
      title: 'TRABAJAMOS PARA CONSEVAR LA BIODIVERSIDAD DE BOLIVIA',
      content: 'Moldear nuestro futuro con nuevos conocimientos que conserven el patrimonio natural, difundiendo las investigaciones científicas de manera accesible, para la preservación de la naturaleza y la biodiversidad en Bolivia.',
      img: require('@/assets/vision.png')
    }
  })
}
</script>
<style scoped>
.page {
  overflow: scroll;
}
#QuienesSomos {
  position: relative;
  margin-top: 100vh;
  z-index: 1;
}
#Vision {
  position: relative;
  z-index: 1;
}
</style>
