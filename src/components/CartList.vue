<template>
  <div >
    <div class="row">
      <div class="col-10">
        <div class="card-columns">
          <cart-item @remove-cart="$emit('remove-cart',item)" v-for="(item, i) in cart" :key="i" :item="item"></cart-item>
        </div>
      </div>

      <div class="col-2">
        <button type="button" @click="checkOutItems">Check Out All</button>
      </div>
    </div>




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
  },
  methods:{
    checkOutItems(){
      this.$emit('check-out',this.cart)
    }
  }
}
</script>

<style scoped>

</style>