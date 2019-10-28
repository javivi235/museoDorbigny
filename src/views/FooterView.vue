<template>
    <div class="footer">
        <v-content>
            <v-row>
                <v-col cols:6>
                    <Contact/>
                </v-col>
                <v-col cols:6>
                    <SocialMedia/>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5"></v-col>
                <v-col>
                  <v-card dark class="elevation-0">
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
  components: {
    Contact,
    SocialMedia
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  width: 100vw;
  background-color: #424242;
  z-index: 1;
  top:200vh;
}
</style>
