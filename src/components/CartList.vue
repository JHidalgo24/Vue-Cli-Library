<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in cart" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "CartList",
  components:{LibraryItem},
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