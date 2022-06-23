import Vue from "vue"
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAcFpOTgUIottRJoPM2xZjl78NrB_QZONY',
    libraries: 'places'
  },
  installComponents: true
})