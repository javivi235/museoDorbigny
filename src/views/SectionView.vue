<template>
    <div>
        <Timeline/>
        <FooterView/>
    </div>
</template>

<script>

import FooterView from '../views/FooterView'
import Timeline from '../components/Section/Timeline'

export default {
  name: 'home',
  components: {
    FooterView,
    Timeline
  }
}
</script>

<style scoped>
</style>
