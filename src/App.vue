    <template>
      <div id="app"> 
        <div class="container-fluid">
        <div class="row ">
            <div class = " col-md-offset-4  col-md-4 col-md-offset-4">
               <router-view></router-view>
                              
            </div>
        </div>
    </div>
      </div>
    </template>

    <script>
import login from "./components/login";
import home from "./components/home";
import items from "./components/items";
import orders from "./components/orders";
export default {
  name: "app",
  components: {
    login,
    home,
    items,
    orders
  }
};
</script>
