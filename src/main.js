import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


//v-form
import {Form} from 'vform'

window.Form = Form;


import {
  Button,
  HasError,
  AlertError,
  AlertErrors,
  AlertSuccess
} from 'vform/src/components/bootstrap5'


Vue.component(Button.name, Button)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)


Vue.prototype.$BASE_API_URL = 'https://naruto-api-mailer.herokuapp.com/api/v1';

Vue.prototype.$BASE_ASSETS_URL = 'http://api.faclub.org/';

Vue.prototype.$LOCAL_ASSETS_URL = 'http://127.0.0.1:8000/';

Vue.prototype.$LANDING_PAGE = 'http://dashboard.faclub.org/';

Vue.prototype.$ENV_MODE = false;


// vue loading overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading, {
  loader: 'dots',
  height: 164,
  width: 164,
  color: '#000000',

});


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


// notify
import VueNotification from '@mathieustan/vue-notification';

Vue.use(VueNotification, {
  theme: {
    colors: {
      success: '#3ac47d',
      darkenSuccess: '#2f7c39',
      info: '#16aaff',
      dark: '#343a40',
      warning: '#f7b924',
      darkenWarning: '#f69a07',
      error: '#d92550',
      darkenError: '#ff245f',
      offline: '#ff4577',
      darkenOffline: '#ff245f',
    },
    boxShadow: '0 0.125rem 0.625rem black',
  },
});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
