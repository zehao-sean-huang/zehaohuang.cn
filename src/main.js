import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileCode, faExternalLinkAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faLinkedin);
library.add(faGithub);
library.add(faInstagram);
library.add(faFacebook);
library.add(faEnvelope);
library.add(faFileCode);
library.add(faExternalLinkAlt);
library.add(faLink);
library.add(faYoutube);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
