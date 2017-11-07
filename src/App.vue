    <template>
      <div id="app"> 
        <div class="container-fluid">
        <div class="row ">
            <div class = " col-md-offset-2  col-md-6 ">
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
import orderlist from "./components/orderlist";
export default {
  name: "app",
  components: {
    login,
    home,
    items,
    orders,
    orderlist
  }
};
</script>
