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
    id="Mision"
    color="#DEDEDE"
    :overview="mision.overview"
    :title="mision.title"
    :content="mision.content"
    :img="mision.img"
    />
    <Information
    id="Vision"
    color="#FFFFFF"
    :overview="vision.overview"
    :title="vision.title"
    :content="vision.content"
    :img="vision.img"
    />
    <History
    id="History"
    color="#DEDEDE"
    :items="history"
    />
    <FooterView topM="600"/>
  </div>
</template>
<script>
import Carousel from '../components/About/Carousel.vue'
import Information from '../components/About/Information.vue'
import History from '../components/About/History.vue'
import FooterView from '../views/FooterView.vue'
export default {
  components: {
    Carousel,
    Information,
    History,
    FooterView
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
      title: 'CUIDAMOS LA VIDA',
      content: 'Moldear nuestro futuro con nuevos conocimientos que conserven el patrimonio natural, difundiendo las investigaciones científicas de manera accesible, para la preservación de la naturaleza y la biodiversidad en Bolivia.',
      img: require('@/assets/vision.png')
    },
    mision: {
      overview: 'Nuestra Mision',
      title: 'TRABAJAMOS PARA CONSEVAR LA BIODIVERSIDAD DE BOLIVIA',
      content: 'Incrementar el conocimiento científico, mediante una institución permanente, sin fines de lucro que conserva, investiga y difunde el patrimonio de las ciencias naturales para el bien de la sociedad y su desarrollo.',
      img: require('@/assets/mision.png')
    },
    history: [
      {
        img: require('@/assets/History1.png'),
        title: 'Todo empezo en el año 1987...',
        content: 'Gracias al esfuerzo de algunos científicos cochabambinos, el año 1987, crearon la Fundación para la Ciencia, institución que por más de 20 años gestionó la creación del Museo de Historia Natural de Cochabamaba.'
      },
      {
        img: require('@/assets/History2.png'),
        title: 'En el año 1997...',
        content: 'Se logra la firma de un convenio interinstitucional entre la Universidad Mayor de San Simón, la Alcaldía Municipal de Cochabama y la Fundación para la Ciencia para la creación del museo que funciona en los ambientes de la primera planta de la denominada casa Hass (Av. Potosí Nº1458)'
      },
      {
        img: require('@/assets/History3.png'),
        title: 'Finalmente en 2003...',
        content: 'Posteriormente el 29 de enero del año 2003, se lográ inaugurar el Museo de Historia Natural "Alcide d\'Orbigny" de Cochabamba a la cabeza de Ricardo Céspedes Paz. Hoy a más de quince años de trabajo el museo sigue luchando por la conservación de la biodiversidad boliviana.'
      }
    ]
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
#Mision {
  position: relative;
  z-index: 1;
}
#History {
  position: relative;
  z-index: 1;
}
</style>
