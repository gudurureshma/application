import Vue from "vue";
import Vuex from "vuex";
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
Vue.use(Vuex);
// Vue.use(VueSocketio, 'http://192.168.1.111:3003');


let socket = socketio("http://localhost:3003");
// let socket = socketio("http://192.168.1.111:3002/socket.io");


const store = new Vuex.Store({
  state: {
    itemsarray: [],
  
  },

  mutations: {
    getitemslist: (state, payload) => {
      console.log(payload[0])
      for (var i = 0; i < payload.length; i++) {
        state.itemsarray.push({
          itemid: payload[i].itemid,
          itemname: payload[i].itemname,
          itemprice: payload[i].itemprice,
          itemquantity: payload[i].itemquantity,
        })

      }
      console.log(state.itemsarray)
      // state.itemsarray.splice(0, state.itemsarray.length, ...payload);
      // socket.on("itemlist", function (data){
      //   console.log((data));
      //    state.itemsarray.push(data);


      // });

    },
    getnewitem: (state, payload) => {
      console.log(payload[0]);
      state.itemsarray.push({
        itemid: payload[0].itemid,
        itemname: payload[0].itemname,
        itemprice: payload[0].itemprice,
        itemquantity: payload[0].itemquantity,
      })

    },

    updateditemlist: (state, payload) => {
      console.log("generated");
      // state.itemsarray.push({
      //   itemid: payload[0].itemid,
      //   itemname: payload[0].itemname,
      //   itemprice: payload[0].itemprice,
      //   itemquantity: payload[0].itemquantity,
      // })

    },


  },

  actions: {
    getItems: ({ commit, state }, payload) => {
      console.log("hit");
      socket.emit("showitemlist", payload, (err, response) => {
        if (err) {
          return;
        }
        // commit("itemlist", response);

      })
    },
    createNewItem: ({ commit, state }, payload) => {
      console.log("newitem");
      socket.emit('createitems', payload, (err, response) => {
        if (err) {
          return;
        }
      })
    },
    updateItem: ({ commit, state }, payload) => {
      console.log(payload)
      console.log("updated item");
      socket.emit('updateitems', payload, (err, response) => {

        if (err) {
          return;
        }
      })
    }

  },
  getters: {
    showitemlist() {
      console.log("showitms list " + store.state.itemsarray);
      return store.state.itemsarray;
    },
  //  shownewitem() {
   
  //     return store.state.newitem;
  //   }


  },


});
socket.on("itemlist", function (data) {
  console.log(data[0]);
  store.commit("getitemslist", data);
  //  store.state.itemsarray.push(data);



});
socket.on('itemlists', function (data) {
  console.log(data[0]);
  store.commit("getnewitem", data);
})
socket.on('itemlist1', function (data) {
  console.log(data[0]);
  store.commit("updateditemlist", data);
})




export default store;
