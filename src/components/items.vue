<template>
<div class="container">
  <div class="row">
    <div class="col-md-8">
        <h1>ITEMS</h1>
    </div>
     <div class="col-md-4 icons">
          <span style="font-size:40px;margin-top:15px" @click="itemlist()"  class="glyphicon">&#xe081;</span>
    </div>
  </div>
  
  
<div class="row " >
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
</div>
</div>
</template> 
<script>
export default {
  name: "items",

  data() {
    return {
      itemsarray: []
      // seen: false
    };
  },

  methods: {
    itemlist: function() {
      console.log("item clicked");
      this.itemsarray.push({});
    }
  }
};
</script>
