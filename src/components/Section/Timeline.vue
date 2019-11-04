<template>
    <div id="sectionDiv">
        <v-timeline>
            <v-timeline-item
            fill-dot
            right>
                <v-card class='mx-auto'>
                    <v-img
                    class="white--text align-end"
                    height="25vh"
                    src="@/assets/Minerologia.jpg">

                    <v-card-title style="color:white;">Minerologia
                    <v-btn style="left:19vw;top:-0.5vh; color:black; background-color:white"
                    icon
                    @click="show1 = !show1">
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>

                    </v-card-title>
                    </v-img>

                        <v-expand-transition>
                            <div v-show="show1">
                                <v-divider></v-divider>

                                <v-btn outlined=true style="top:15vh;left:21.5vw">Ver mas</v-btn>

                                <v-card-text style="text-align:justify; width:20vw;">
                                La mineralogía es la rama de la geología que estudia las propiedades físicas y químicas de los minerales que se encuentran en el planeta en sus diferentes estados de agregación.  Un mineral es un sólido inorgánico de origen natural, que presenta una composición química definida.
                                </v-card-text>

                            </div>
                        </v-expand-transition>
                </v-card>
            </v-timeline-item>

            <v-timeline-item
            fill-dot
            left>
                <v-card class='mx-auto' style="left:6.5vw;">
                    <v-img
                    class="white--text align-end"
                    height="25vh"
                    src="@/assets/Paleontologia.jpg">

                    <v-card-title style="color:white;">Paleontologia
                    <v-btn style="left:18vw;top:-0.5vh; color:black; background-color:white"
                    icon
                    @click="show2 = !show2">
                        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>

                    </v-card-title>
                    </v-img>

                        <v-expand-transition>
                            <div v-show="show2">
                                <v-divider></v-divider>

                                <v-btn outlined=true style="top:15vh;left:21.5vw">Ver mas</v-btn>

                                <v-card-text style="text-align:justify; width:20vw;">
                                La mineralogía es la rama de la geología que estudia las propiedades físicas y químicas de los minerales que se encuentran en el planeta en sus diferentes estados de agregación.  Un mineral es un sólido inorgánico de origen natural, que presenta una composición química definida.
                                </v-card-text>

                            </div>
                        </v-expand-transition>
                </v-card>
            </v-timeline-item>

            <v-timeline-item
            fill-dot
            right>
                <v-card class='mx-auto'>
                    <v-img
                    class="white--text align-end"
                    height="25vh"
                    src="@/assets/Ictiologia.jpg">

                    <v-card-title style="color:white;">Ictiologia
                    <v-btn style="left:20.5vw;top:-0.5vh; color:black; background-color:white"
                    icon
                    @click="show3 = !show3">
                        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>

                    </v-card-title>
                    </v-img>

                        <v-expand-transition>
                            <div v-show="show3">
                                <v-divider></v-divider>

                                <v-btn outlined=true style="top:15vh;left:21.5vw">Ver mas</v-btn>

                                <v-card-text style="text-align:justify; width:20vw;">
                                La mineralogía es la rama de la geología que estudia las propiedades físicas y químicas de los minerales que se encuentran en el planeta en sus diferentes estados de agregación.  Un mineral es un sólido inorgánico de origen natural, que presenta una composición química definida.
                                </v-card-text>

                            </div>
                        </v-expand-transition>
                </v-card>
            </v-timeline-item>            <v-timeline-item>Entomologia</v-timeline-item>
            <v-timeline-item>Herpetologia</v-timeline-item>
            <v-timeline-item>Mastozoologia</v-timeline-item>
            <v-timeline-item>Ornitologia</v-timeline-item>

        </v-timeline>
    </div>
</template>

<script>

export default {
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false
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
        left: -7vw;
        width: 30vw;
    }

    .purple{
        color: white;
    }

</style>
