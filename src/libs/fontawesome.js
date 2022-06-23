import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faSadCry as fasSadCry,
  faPhone as fasPhone,
  faArrowRight as fasArrowRight,
  faMapPin as fasMapPin,
  faComment as fasComment,
  faShareAlt as fasShareAlt,
  faSearch as fasSearch,
} from '@fortawesome/free-solid-svg-icons'

import { 
  faSadCry as farSadCry,
  faEnvelope as farEnvelope,
} from "@fortawesome/free-regular-svg-icons"

import {
  faWhatsapp as fabWhatsapp,
  faInstagram as fabInstagram,
  faTwitter as fabTwitter,
  faLinkedin as fabLinkedin,
  faFacebook as fabFacebook,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  farSadCry, 
  fasSadCry,
  farEnvelope,
  fasPhone,
  fasArrowRight,
  fasMapPin,
  fabWhatsapp,
  fabInstagram,
  fabTwitter,
  fabLinkedin,
  fabFacebook,
  fasComment,
  fasShareAlt,
  fasSearch
)

Vue.component('font-awesome', FontAwesomeIcon)