<template>
  <div class="card-columns">
    <cart-item @remove-cart="$emit('remove-cart',item)" v-for="(item, i) in cart" :key="i" :item="item"></cart-item>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";

export default {
  name: "CartList",
  components:{CartItem},
  props:{
    cart:{
      type:[],
      required:true
    }
  }
}
</script>

<style scoped>

</style>