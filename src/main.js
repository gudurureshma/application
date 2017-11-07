// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import MyVuexStore from './store.js'
// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';
// export const SocketInstance = socketio('http://localhost:8080');
// Vue.use(VueSocketIO)


// Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
 
  

})
