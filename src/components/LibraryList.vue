<template>
  <div class="card-columns">
    <library-item  @check-out-lib="checkOutLib" @remove-store="removeMe" @update-cart="$emit('update-cart',item)" v-for="(item, i) in library" :key="i" :item="item"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";


export default {
  name: "LibraryList",
  components: {LibraryItem},
  props:{
    library:{
      type:[],
      required:true
    }
  },
  data() {
    return {
      page: 1
    }
  },
  methods:{
    removeMe(e){
      this.library.removeItem(e);
    },
    checkOutLib(e){
      this.$emit('check-out-lib',e)
    }
  }
,

}
</script>

<style scoped>

</style>
