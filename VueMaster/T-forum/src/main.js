// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import AppDate from './components/AppDate.vue'
import firebase from 'firebase'

Vue.component('app-date', AppDate)
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCnYVtGkeRQCTce9TwjAtFiZJmhgvfLL-M',
  authDomain: 't-forum-701d6.firebaseapp.com',
  databaseURL: 'https://t-forum-701d6.firebaseio.com',
  projectId: 't-forum-701d6',
  storageBucket: '',
  messagingSenderId: '654706008978'
}
firebase.initializeApp(config)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
