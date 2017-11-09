<template>
<div class="container">
  <div class="row">
    <div class="col-md-8">
        <h1>ORDERS</h1>
    </div>
     <div class="col-md-4 icons margin-top:30px">
          <span style="font-size:40px;margin-top:15px" v-on:click="orderlist()" class="glyphicon">&#xe081;</span>
    </div>
  </div>
   <table class="table table-bordered">
            <thead>
                <tr>
                    <th >ORDER-ID</th>
                    <th >EMP ID</th>
                   <th >DATE</th>
                    <th >QUANTITY</th>
                    <th >TOTAL-AMOUNT</th>
                    
                </tr>
            </thead>
      </table>      
</div>
</template>
<script>
export default {
  name: "orders",
  data() {
    return {};
  },
  methods:{
  orderlist: function() {
      this.$router.push("/orderlist");
    }
  }
};
</script>
