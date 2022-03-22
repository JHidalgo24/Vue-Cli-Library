<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
      &nbsp;
      <a @click="cartVisibility = !cartVisibility"><span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i>{{this.cart.length}}</span></a>
    </nav>

    <div v-show="cartVisibility" class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <hello-universe msg="Welcome to Your Vue.js App"/>-->
      <library-list @update-cart="receive"></library-list>
    </div>
    <div v-show="!cartVisibility" class="container-fluid mt-3">
      <h1>Temp Cart</h1>
      <cart-list @check-out="updateCheckouts" @remove-cart="removeCart" :cart="cart"></cart-list>
    </div>
  </div>
</template>

<script>
import LibraryList from "@/components/LibraryList";
import CartList from "@/components/CartList";
import CartCollection from "@/models/CartCollection";

export default {
  name: 'App',
  components: {LibraryList, CartList},
  data: function () {
    return {
      cart: new CartCollection(),
      cartVisibility: true
    }
  }
  ,methods:{
    receive(e){
      if (!this.cart.find(ex => ex === e)){
        this.cart.addItem(e);
      }
    },
    removeCart(e){
      this.cart.removeItem(e)
    },
    updateCheckouts(){
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].checkOut();
      }
    }
  }

}
</script>

<style scoped>
a{
 color: white;
}
</style>
