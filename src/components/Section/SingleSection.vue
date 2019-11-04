<template>
    <div id="SingleSectionDiv">
        <h1 id="SectionTitle">Minerologia</h1>
        <FooterView/>
    </div>
</template>
<script>

import FooterView from '@/views/FooterView'

export default {
  name: 'home',
  components: {
    FooterView
  }
}
</script>

<style scoped>

    #SingleSectionDiv{
        height: 100vh;
    }

    #SectionTitle{
        left: 20vw;
    }
</style>
