<template>
    <GmapMap :center="{lat, lng}" :zoom="15" style="width: 50vw; height: 100vh">
        <GmapMarker :position="google && new google.maps.LatLng(lat, lng)" :clickable="true" />
    </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  name: 'Map',
  data: function () {
    return {
      lat: -17.3735555,
      lng: -66.1555749
    }
  },
  computed: {
    google: gmapApi
  }
}
</script>
