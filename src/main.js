import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import HighchartsVue from 'highcharts-vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faArrowLeft,
  faArrowRight,
  faChevronCircleLeft,
  faChevronCircleRight,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faTelegram,
  faTwitch,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
  faUserSecret,
  faYoutube,
  faDiscord,
  faTwitch,
  faTelegram,
  faArrowLeft,
  faArrowRight,
  faChevronCircleLeft,
  faChevronCircleRight
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);
Vue.config.productionTip = false;
Vue.use(HighchartsVue);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
