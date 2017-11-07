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
  
  
<!-- <div class="row " >
  <ul >
      <li v-for="item in itemsarray">
     
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
</div>
</template> 
<script>
export default {
 

  data() {
    return {
      
     
    };
  },

  // methods: {
  //   itemlist: function() {
  //     console.log("item clicked");
  //     this.itemsarray.push({});
  //   }
  // },
  // computed: {
  //   items() {
  //     return this.$store.getters.showitemlist();
  //   }
  // }
};
</script>




