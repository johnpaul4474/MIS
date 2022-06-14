require('./bootstrap')
window.Vue = require('vue').default

import Vue from 'vue'
import router from "./router"
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
    components: {
        'App': () => import(/* webpackPreload: true */ './App')
    }
});