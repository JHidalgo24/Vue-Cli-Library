<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in cart" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import CartCollection from "@/models/CartCollection";
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "CartList",
  components:{LibraryItem},
  props:{
    cart:{
      type:CartCollection,
      required:true
    }
  }
  ,
  methods:{
    updateCart(e){
      this.cart.addItem(e);
    }
  }
}
</script>

<style scoped>

</style>