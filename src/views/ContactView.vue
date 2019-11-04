<template>
  <div>
    <div class="hidden-sm-and-down">
      <v-row no-gutters>
        <v-col class="contact-row">
          <Form class="mt-10"></Form>
        </v-col>
        <v-col>
          <Map></Map>
        </v-col>
      </v-row>
    </div>
    <div class="hidden-md-and-up contact-row">
      <Form></Form>
      <Map></Map>
    </div>
    <FooterView topM="100"/>
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
  },
  methods: {
  }
}
</script>

<style scoped>
.contact-row{
  background-image: url('../assets/museo1.png');
}
</style>
