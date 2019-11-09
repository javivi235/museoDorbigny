<template>
  <GmapMap id="contact-map"
    :center="{'lat': markers[0].latitude, 'lng': markers[0].longitude}"
    :zoom="17"
    style="width: 100%; height: 100vh"
  >

  <gmap-info-window
    :options="informationWindowOptions"
    :position="informationWindowPosition"
    :opened="informationWindowIsOpen"
    @closeclick="informationWindowIsOpen=false">
  </gmap-info-window>

  <GmapMarker
    v-for="(marker, index) in markers"
    :key="marker.name"
    :position="google && new google.maps.LatLng(marker.latitude, marker.longitude)"
    :clickable="true"
    @click="toggleInfoWindow(marker, index)" />
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  name: 'Map',
  data: function () {
    return {
      informationWindowPosition: null,
      informationWindowIsOpen: false,
      currentMindex: null,
      informationWindowOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: [
        {
          name: 'Museo Alcide d\'Orbigny',
          latitude: -17.373503,
          longitude: -66.1536
        },
        {
          name: 'Museo de la Universidad Católica',
          latitude: -17.373497,
          longitude: -66.142652
        }
      ]
    }
  },
  mounted: function () {
    console.log()
  },
  methods: {
    toggleInfoWindow: function (marker, index) {
      this.informationWindowPosition = {
        lat: marker.latitude,
        lng: marker.longitude
      }

      this.informationWindowOptions.content = marker.name

      if (this.currentMindex === index) {
        this.informationWindowIsOpen = !this.informationWindowIsOpen
      } else {
        this.informationWindowIsOpen = true
        this.currentMindex = index
      }
    }
  },
  computed: {
    google: gmapApi
  }
}
</script>
