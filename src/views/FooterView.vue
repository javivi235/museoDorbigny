<template>
    <div :style="style" class="footer">
        <v-content class="content">
            <v-row>
                <v-col cols:6>
                    <Contact/>
                </v-col>
                <v-col cols:6>
                    <SocialMedia/>
                </v-col>
            </v-row>
            <v-row class="grey1">
                <v-col cols="5"></v-col>
                <v-col>
                  <v-card dark class="elevation-0 copyrigth">
                    <v-card-text>Copyright © 2019 </v-card-text>
                  </v-card>
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>

<script>
import Contact from '../components/Footer/Contact'
import SocialMedia from '../components/Footer/SocialMedia'
export default {
  props: {
    topM: String
  },
  components: {
    Contact,
    SocialMedia
  },
  computed: {
    style () {
      return 'top: ' + this.topM + 'vh;'
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #424242;
  z-index: 1;
}
.content {
  margin-top: 25vh;
  margin-left: 10vw;
}
.copyrigth {
  margin-top: 15vh;
}
.grey1 {
  background-color: #424242;
  margin-left: -10vw;
}
</style>
