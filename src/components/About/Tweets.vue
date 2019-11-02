<template>
    <div :style="style">
        <v-content>
            <v-row>
                <v-col cols="1">
                </v-col>
                <v-col ref="div">
                    <a class="twitter-timeline" data-width="100vw" data-height="98vh" data-dnt="true" data-theme="ligth" href="https://twitter.com/MuseodOrbigny?ref_src=twsrc%5Etfw">Tweets by MuseodOrbigny</a>
                </v-col>
            </v-row>
        </v-content>
    </div>
</template>
<script>
// import { Tweet } from 'vue-tweet-embed'
export default {
  components: {
    // Tweet
  },
  props: {
    color: String
  },
  computed: {
    style () {
      return 'background-color: ' + this.color + '; height: 100vh;  width: 100vw;'
    }
  },
  mounted () {
    let foo = document.createElement('script')
    foo.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    foo.setAttribute('async', 'true')
    foo.setAttribute('charset', 'utf-8')
    this.$refs.div.appendChild(foo)
  }
}
</script>
<style scoped>
</style>
