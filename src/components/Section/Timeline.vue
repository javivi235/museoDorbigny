<template>
    <div id="sectionDiv">
        <v-timeline >
            <v-timeline-item
            v-for= "element in elements"
            :key= "element.title"
            fill-dot
            :color= "element.color"
            element.side
            :id = element.title>
                <v-card class='mx-auto'>
                    <v-img
                    class="white--text align-end"
                    height="30vh"
                    v-bind:src= element.pictureUrl>

                    <v-card-title style="color:white;">{{element.title}}
                    <v-btn style="position:absolute; right:0vw;top:25vh; color:black; background-color:white"
                    icon
                    @click="element.show= !element.show">
                        <v-icon>{{ element.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>

                    </v-card-title>
                    </v-img>

                        <v-expand-transition>
                            <div v-show="element.show">
                                <v-divider></v-divider>

                                <v-btn :outlined=true style="top:15vh;left:21.5vw">Ver mas</v-btn>

                                <v-card-text style="text-align:justify; width:20vw;">
                                {{element.text}}
                                </v-card-text>

                            </div>
                        </v-expand-transition>
                </v-card>
            </v-timeline-item>

        </v-timeline>
    </div>
</template>

<script>

export default {
  data: () => ({
    elements: [
      {
        title: 'Minerologia',
        text: 'La mineralogía es la rama de la geología que estudia las propiedades físicas y químicas de los minerales que se encuentran en el planeta en sus diferentes estados de agregación.  Un mineral es un sólido inorgánico de origen natural, que presenta una composición química definida.',
        show: false,
        side: 'right',
        pictureUrl: require('@/assets/Minerologia.jpg'),
        color: '#3094C3'
      }, {
        title: 'Paleontologia',
        text: 'La paleontología es la ciencia natural que estudia e interpreta el pasado de la vida sobre la Tierra a través de los fósiles.1​ Se encuadra dentro de las ciencias naturales, posee un cuerpo de doctrina propio y comparte fundamentos y métodos con la geología y la biología con las que se integra estrechamente. ',
        show: false,
        side: 'left',
        pictureUrl: require('@/assets/Paleontologia.jpg'),
        color: '#855723'
      }, {
        title: 'Ictiologia',
        text: 'La ictiología1​ es una rama de la zoología dedicada al estudio de los peces. Esta incluye los osteíctios (peces óseos), los condrictios (peces cartilaginosos, tales como el tiburón y la raya) y los agnatos (peces sin mandíbula). Se estima que hay alrededor de 32.700 especies descritas y que cada año son descritas oficialmente 250 nuevas especies.',
        show: false,
        side: 'right',
        pictureUrl: require('@/assets/Ictiologia.jpg'),
        color: '#FF5722'
      }, {
        title: 'Entomologia',
        text: 'La entomología es el estudio científico de los insectos. De cerca de las 1,3 millones de especies descritas, los insectos constituyen más de los dos tercios de todos los seres vivos conocidos2​ y, además, tienen una larga historia fósil, ya que su aparición se remonta al Devónico, hace unos 400 millones de años.',
        show: false,
        side: 'left',
        pictureUrl: require('@/assets/entomologia.jpg'),
        color: '#632A6D'
      }, {
        title: 'Herpetologia',
        text: 'La herpetología​ es la rama de la zoología que estudia a los reptiles y anfibios. El estudio de los anfibios beneficia al conocimiento del estado del ambiente, porque son muy sensibles a las perturbaciones de los ecosistemas, especialmente la contaminación, en parte porque su primer desarrollo se produce en ambientes acuáticos frecuentemente poco extensos o temporales.',
        show: false,
        side: 'right',
        pictureUrl: require('@/assets/Herpetologia.jpg'),
        color: '#42B549'
      }, {
        title: 'Mastozoologia',
        text: 'La mastozoología, también llamada teriología o mamiferología, es la rama de la zoología dedicada al estudio de los mamíferos. ​Existen alrededor de 4.200 especies de animales considerados los mamíferos. Las principales disciplinas que incluyen la mastozoología corresponden a historia natural, taxonomía, anatomía, fisiología y etología.',
        show: false,
        side: 'left',
        pictureUrl: require('@/assets/Mastozoologia.jpg'),
        color: '#FFC30F'
      }, {
        title: 'Ornitologia',
        text: 'La ornitología es la rama de la zoología que se dedica al estudio de las aves. Numerosos aspectos de la ornitología difieren de las disciplinas relacionadas, debido en parte a la alta visibilidad y el atractivo estético de las aves. Una de las diferencias más notables es la importancia y cantidad de estudios llevados a cabo por aficionados que trabajan dentro de los parámetros de la metodología científica.',
        show: false,
        side: 'right',
        pictureUrl: require('@/assets/Ornitologia.jpg'),
        color: '#3094C3'
      }
    ]
  }),
  name: 'home',
  components: {

  }
}
</script>

<style scoped>
    #sectionDiv{
        height: auto;
        background-color: white;
    }

    .mx-auto{
        width: 35vw;
    }

    .purple{
        color: white;
    }

</style>
