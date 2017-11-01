
<template>
<div >
<div class="text-center">
   <h1 style="font-size:20px">SUPERMARKET LOGIN PAGE</h1>
    <div class="form-group">
      <input type="text" class="form-control" v-model="employeename" placeholder="username">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="pwd" placeholder="password">  
    </div>
    <div>
      <button type="button" @click="login()"  class="btn btn-info">login</button>
     </div>
</div>
</div>
</template>
<script>
// import VueResource from "vue-resource";
export default {
  name: "login",
  data() {
    return {
      employeename: "",
      pwd: ""
    };
  },

  methods: {
    login: function() {
      var logindetalis = {
        employeename: this.employeename,
        password: this.pwd
      };
      console.log("login works");
      this.$http
        .post("http://192.168.1.111:3003/api/login", logindetalis)
        .then(res => {
          console.log(res.body);
          console.log(res.body.message);
          var result = res.body;
          if (result.message == "login success") {
            this.$router.push("/home");
          }
          else{
            alert("wrong username or password");
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>


 







