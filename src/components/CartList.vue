<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in cartList" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
import CartCollection from "@/models/CartCollection";

export default {
  name: "CartList",
  components:{LibraryItem},
  props:{
    cartList:{
      type:CartCollection,
      required:true
    }
  }
}
</script>

<style scoped>

</style>