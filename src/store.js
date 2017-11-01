import Vue from "vue";
import Vuex from "vuex";
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';
Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {

//   }
// });
const store = new Vuex.Store({
    state: {
    itemsarray: []
  },

  actions: {
    SOCKET_emit: ('showitemlist') 
    
    
  },

  mutations: {
    SOCKET_on:('itemlist')
 
  },



})
export default store;
