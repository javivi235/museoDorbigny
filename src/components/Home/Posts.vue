<template>
  <div id='postsWindow' >
       <v-divider id="firstDivider"></v-divider>
       <h5 id="divTitle">Publicaciones</h5>
       <h1 id="postTitle">{{posts[0].title}}</h1>
       <h5 id="postBody">{{posts[0].body}}</h5>

       <v-carousel id='postCarousel' hide-delimiters='true' cycle='true'>
           <v-carousel-item class="postCarouselItem" src="@/assets/museo1.jpg"/>
           <v-carousel-item class="postCarouselItem" src="@/assets/museo2.jpg"/>
           <v-carousel-item class="postCarouselItem" src="@/assets/museo3.jpg"/>
       </v-carousel>

       <v-btn id="goButton" outlined='true'>Ver Mas</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data: function () {
    return {
      posts: [
        { id: 'project1',
          title: 'MUSEO "ALCIDE D\'ORBIGNY"',
          subtitle: 'Este es un proyecto prueba',
          body: 'Somos una institución dinamica que trabaja para conservar la biodiversidad en Bolivia a tráves de la realización de proyectos de investigación, conservación de colecciones científicas y programas de difusión y comunicación a la sociedad.\n Nuestras áreas de acción son la paleontología, cambios climáticos, estudio de invertebrados y vertebrados, estudios de plantas, biología molecular y apoyo a la educación.'
        }],
      url: '@/assets/rana1.jpg'
    }
  }
}
</script>

<style scoped>
    #postsWindow{
        z-index:1;
        position: relative;
        top:100vh;
        background-color: #FFFFFF;
        height: 100vh;
    }

    #postTitle{
        position: absolute;
        top:20vh;
        left:55vw;
    }

    #divTitle{
        position: absolute;
        color: green;
        top: 3vh;
        left: 1.5vw;
    }

    #postBody{
        position: absolute;
        top: 35vh;
        left: 55vw;
        width: 40vw;
        text-align: justify;
    }

    #firstDivider{
        position: absolute;
        background-color: green;
        top: 5vh;
        left: 10vw;
        width: 90vw;
    }

    #postCarousel{
        position:absolute;
        height: 50vh !important;
        width: 45vw;
        top: 20vh;
        left: 5vw;
    }

    .postCarouselItem{
        width: 50vw !important;
    }

    #goButton{
        position: absolute;
        top:64vh;
        left: 70vw;
        color: green;
    }
</style>
