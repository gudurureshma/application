<template>
<div class="container">
  <div class="row">
    <div class="col-md-8">
        <h1>ORDER DETAILS</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 well">
                 <div class="form-group">
                    <input type="text" name="cusname"  class="form-control" placeholder="customername">
                 </div>
                 <div class="form-group">
                    <input type="text" name="phno"  class="form-control" placeholder="phonenumber" >
                 </div>
                 <div class="form-group">
                    <textarea name="address"  class="form-control" placeholder="address" ></textarea>
                 </div>
                 <div class="form-group text-center">
                    <button >add</button>
                 </div>
            </div>           
        </div>
    </div>   
  </div>
      <div class="container-fluid">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th >ORDER-ID</th>
                        <th >ITEM-LIST</th>
                        <th>PRICE</th>
                        <th >QUANTITY</th>
                        <th >AMOUNT</th>
                        <th >TAX</th>
                        <th >TOTAL-AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                           
                        </td>
                        <td>
                            <select>
                                <option  v-for='order in items' >
                                  {{order.itemname}}
                                

                                    
                                </option>
                            </select>

                        </td>
                        <td> 
                            
                        </td>
                        <td>
                            <input type="text">
                        </td>
                        <td>
                           
                        </td>
                        <td>
                          
                        </td>
                        <td>
                           
                        </td>
                        <td>
                            <button  v-on:click="addorders()">Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th >ORDER-ID</th>
                        <th >ITEM-LIST</th>
                        <th >PRICE</th>
                        <th >QUANTITY</th>
                        <th >AMOUNT</th>
                        <th >TAX</th>
                        <th >TOTAL-AMOUNT</th>
                    </tr>
                </thead>
                <!-- <tbody>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                           
                        </td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td>
                           
                        </td>
                        <td>
                           
                        </td>
                        <td></td>
                    </tr>
                </tbody> -->
            </table>
            <div class="text-center" style="margin-right:300px">
                <h3>sum:</h3>
                <h3>taxsum:</h3>
                <h3>totalsum:</h3>
            </div>
        </div>
  
  
</div>
</template> 
  

 
<script>
export default {
 

  data() {
      
    return {
    
      
     
    };
  },
  mounted(){
       this.$store.dispatch('getItems');
  },

  methods: {
    addorders:function(){
        console.log("triggeer");
        this.$store.dispatch('addOrderItems',{
                    // orderid: oorderid,
                    // itemselected: oitemselected,
                    // price: oprice,
                    // quantity: oquantity,
                    // amount: oamount,
                    // tax: otaxamount,
                    // totalamount: ototalamount
        })


    }
  },
  computed: {
    items() {
      return this.$store.getters.showitemlist;

    }
  }
};
</script>




