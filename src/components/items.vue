<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>

<template>
<div>
<!-- <span><i class="fa fa-caret-square-o-left" ></i></span> -->
<span class="glyphicon glyphicon-chevron-left"  @click="list()"></span>
 <!-- <span style="font-size:40px;margin-top:15px" @click="itemlist()"  class="glyphicon">&#xe081;</span> -->

<div class="container">
  <div class="row">
    <div class="col-md-8">
        <h1>ITEMS</h1>
    </div>
     <div class="col-md-4 icons">
          <span style="font-size:40px;margin-top:15px" @click="newitems()"  class="glyphicon">&#xe081;</span>
    </div>
  </div>
   <table class="table" >
    <thead>
        <tr>
          <th >ITEM-ID</th>
          <th>ITEM NAME</th>
          <th >PRICE</th>
          <th >QUANTITY</th>
        </tr>
    </thead>
      <tbody>
          <tr v-for='item in items' :key="item.id">
            <td>{{item.itemid}}</td>                     
            <td v-on:click= "onclick(item)"> <input type="text" v-show="item == activeEdit"  v-model="item.itemname" >{{item.itemname}}</td>
            <td v-on:click="onclick(item)" > <input type="text" v-show="item == activeEdit" v-model="item.itemprice">{{item.itemprice}}</td>                      
            <td v-on:click="onclick(item)"><input type="text" v-show="item == activeEdit" v-model="item.itemquantity" >{{item.itemquantity}}</td>                       
            <td v-on:click="edit(item)"><button type="button"  class="btn btn-info">edit</button> </td>                                        
          </tr>
        </tbody>
   </table>

  
  
<!-- <div class="row " >
  <ul >
      <li v-for="item in itemsarrays" :key="item.id" >
         <div class="col-md-3 form-group "> 
            <input type="text"  class="form-control"   placeholder="itemid">
        </div>
        <div class="col-md-3 form-group "> 
            <input type="text"  class="form-control"   placeholder="itemname">
        </div>
        <div class="col-md-3 form-group">
          <input type="text" class="form-control"   placeholder="price">
        </div>
        <div class="col-md-3 form-group">
          <input type="text" class="form-control"  placeholder="quantity">
        </div>
        <div class="col-md-3 form-group">
          <button type="button"   class="btn btn-info">edit</button>
        </div>
     </li>
  </ul>  
</div> -->
<!-- <ul> -->
  <!-- <li v-for="item in store.state.itemsarray">
{{item.itemid}}
  </li> -->
  <!-- <li v-for="(item, itemIndex) in items" :key="itemIndex">
    {{item.itemid}}
    {{item.itemname}}
    {{item.itemprice}}
    {{item.itemquantity}}
  </li> -->
<!-- </ul> -->

</div>
</div>

</template>  
<script>
export default {
  name: "items",

  data() {
   
    return {
      itemsarrays: [],
       activeEdit:null
      
      
    }
  },

  methods: {
    itemlist: function() {
      console.log("item clicked");
      this.itemsarrays.push({});
    },
    list: function(){
      this.$router.push("/home");
      
    },
    newitems:function(){
       this.$store.dispatch('createNewItem');
    },
     edit:function(item){
         this.activeEdit = null
                item.itemname = item.itemname.trim()
                item.itemprice = item.itemprice.trim()
                item.itemquantity = item.itemquantity.trim()
                console.log(item.itemname)
       this.$store.dispatch('updateItem',{
                    itemid:item.itemid,
                    name:item.itemname,
                    price:item.itemprice ,
                    quantity: item.itemquantity
       });
    },
    onclick: function(item){
      this.activeEdit=item
    }

  },
  computed: {
    items() {
      console.log(store.state.itemsarray);
      return this.$store.getters.showitemlist;
      //return store.state.itemsarray;
    }
  }
};
</script>
