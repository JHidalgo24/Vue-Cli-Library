<template>
  <div class="card" :class="{'border-success': item.isAvailable()}">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button v-else @click="item.checkIn()">Check In</button>
      <button @click="$emit('remove-cart',item)">Remove</button>
    </div>
  </div>
</template>

<script>
import BookDetails from "@/components/BookDetails";
import MovieDetails from "@/components/MovieDetails";
import AlbumDetails from "@/components/AlbumDetails";

export default {
  name: "CartItem",
  components: {BookDetails, MovieDetails,AlbumDetails},
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
  ,
  computed: {
    typeOfItem() {
      return this.item.constructor.name + 'Details';
    }
  },
}
</script>

<style scoped>

</style>
