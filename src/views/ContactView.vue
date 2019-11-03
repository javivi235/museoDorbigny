<template>
  <div class="contact">
    <v-row no-gutters>
      <v-col class="contact-row">
        <Form class="mt-10"></Form>
      </v-col>
      <v-col>
        <Map></Map>
      </v-col>
    </v-row>
    <FooterView/>
  </div>
</template>

<script>
import Form from '../components/Contact/Form'
import Map from '../components/Contact/Map'
import FooterView from '../views/FooterView.vue'

export default {
  components: {
    Form,
    Map,
    FooterView
  }
}
</script>

<style scoped>
.contact{
  margin-top: 7vh;
}

.contact-row{
  background-image: url('../assets/museo1.png');
}
</style>
