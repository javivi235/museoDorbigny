<template>
  <div id='projectsWindow' >
       <v-divider id="firstDivider"></v-divider>
       <h5 id="divTitle">Proyectos</h5>
       <h1 id="projectTitle">{{projects[1].title}}</h1>
       <h5 id="projectBody">{{projects[1].body}}</h5>

       <v-carousel id='projectCarousel' hide-delimiters='true' cycle=true>
           <v-carousel-item class="projectCarouselItem" src="@/assets/rana1.jpg"/>
           <v-carousel-item class="projectCarouselItem" src="@/assets/rana2.jpg"/>
           <v-carousel-item class="projectCarouselItem" src="@/assets/rana3.jpg"/>
       </v-carousel>

       <v-btn id="project-goButton" outlined='true'>Ver Mas</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data: function () {
    return {
      projects: [
        { id: 'project1',
          title: 'Proyecto Prueba',
          subtitle: 'Este es un proyecto prueba',
          body: ''
        },
        { id: 'project2',
          title: 'CENTRO K\'AYRA',
          subtitle: 'Vida a las ranas',
          body: 'En la actualidad el Centro K´ayra es el único en Bolivia destinado al manejo ex situ de especies de anfibios amenazados, albergando más de 200 individuos de cinco especies del genero Telmatobius, con una proyección a incluir otras especies en peligro de extinción. Para esto se tiene planificado ampliar los ambientes e para incluir especies terrestres.',
          url1: '@/assets/rana1.jpg',
          url2: '@/assets/rana2.jpg',
          url3: '@/assets/rana3.jpg'
        }],
      url: '@/assets/rana1.jpg'
    }
  }
}
</script>

<style scoped>
    #projectsWindow{
        z-index:1;
        position: relative;
        top:100vh;
        background-color: #DEDEDE;
        height: 100vh;
    }

    #projectTitle{
        position: absolute;
        top:20vh;
        left:6vw;
    }

    #divTitle{
        position: absolute;
        color: green;
        top: 3vh;
        left: 1.5vw;
    }

    #projectBody{
        position: absolute;
        top: 35vh;
        left: 6vw;
        width: 40vw;
        text-align: justify;
    }

    #firstDivider{
        position: absolute;
        background-color: green;
        top: 5vh;
        left: 8vw;
        width: 90vw;
    }

    #projectCarousel{
        position:absolute;
        height: 50vh !important;
        width: 45vw;
        top: 20vh;
        left: 50vw;
    }

    .projectCarouselItem{
        height: 50vh;
        width: 50vw;
    }

    #goButton{
        position: absolute;
        top:64vh;
        left: 20vw;
        color: green;
    }
</style>
