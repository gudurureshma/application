<template>


<div class="container">
    <div class="row">    
        <div class="col-md-6" >
            <div class="card">
                <div class="card-image margin">
                    <img class="img-responsive" src="../assets/so.jpg">                   
                </div>
                  <button type="button" v-on:click="items()" class="btn btn-info">ITEMS</button>
                <div class="card-content">
                                                          
                </div>             
             
            </div>
        </div>

         <div class="col-md-6 ">
            <div class="card">
                <div class="card-image">
                    <img class="img-responsive" src="../assets/so.jpg">
                    
                </div>
                  <button type="button" v-on:click="orders()" class="btn btn-info">ORDERS</button>
                <div class="card-content">                                       
                   
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },

  methods: {
    orders: function() {
      this.$router.push("/orders");
    },
    items: function() {
      this.$router.push("/items");
    }
  }
};
</script>

