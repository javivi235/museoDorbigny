<template>
    <div class= "contenedor" :style="style">
        <v-container class= "contenedor">
            <v-row class= "contenedor">
                <v-col cols="6">
                    <v-card class= "cardText elevation-0" :color="color" :id="'cardData' + overview">
                        <div class="overline mb-4 overview" :id="'cardOverview' + overview">{{overview}}</div>
                        <v-card-title class="title" :id="'cardTitle' + overview">{{title}}</v-card-title>
                        <div>
                            <p class="text--primary content" :id="'cardContent' + overview">{{content}}</p>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card
                    :color="color"
                    class="cardImage elevation-0"
                    :id="'cardImage' + overview"
                    >
                        <v-img class="image" :id="'image' + overview" :src="img"></v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
  props: {
    color: String,
    title: String,
    overview: String,
    content: String,
    img: String
  },
  computed: {
    style () {
      return 'background-color: ' + this.color + ';'
    }
  }
}
</script>
<style scoped>
.contenedor {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0.2vw;
}
.cardText {
    position: absolute;
    height: 100vh;
    width: 50vw;
    left: 0.2vw;
}
.cardImage {
    position: absolute;
    height: 100vh;
    width: 50vw;
    left: 50.2vw;
}
.overview {
    margin-top: 10vw;
    margin-left: 5vw;
}
.title {
    margin-left: 4vw;
}
.content {
    margin-left: 4vw;
}
.image {
    margin-top: 20vh;
    margin-left: 5vw;
    margin-right: 5vw;
}
</style>
