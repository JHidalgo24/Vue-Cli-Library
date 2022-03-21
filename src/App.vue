<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
    </nav>

    <div class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <hello-universe msg="Welcome to Your Vue.js App"/>-->
      <library-list @update-cart="receive"></library-list>
    </div>
    <div class="container-fluid mt-3">
      <h1>Temp Cart</h1>
      <cart-list :cart="cartstuff"></cart-list>
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
      cartstuff: new CartCollection()
    }
  }
  ,methods:{
    receive(e){
      if (!this.cartstuff.find(ex => ex === e)){
        this.cartstuff.addItem(e);
        console.log(this.cartstuff)
      }
    }
  }

}
</script>

<style>

</style>
