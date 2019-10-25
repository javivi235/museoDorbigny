<template>
    <v-content>
        <v-row>
            <v-col cols:6>
                <Contact/>
            </v-col>
            <v-col cols:6>
                <SocialMedia/>
            </v-col>
        </v-row>
    </v-content>
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
  background-color: #43464b
}
</style>
