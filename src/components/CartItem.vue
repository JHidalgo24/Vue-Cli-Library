<template>
  <div class="card" :class="{'border-success': item.isAvailable()}">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button @click="$emit('remove-cart',item)">Remove From Cart</button>
    </div>
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails";
import AlbumDetails from "@/components/AlbumDetails";
import EBookDetails from "@/components/EBookDetails";
import SongDetails from "@/components/SongDetails";

export default {
  name: "CartItem",
  components: {EBookDetails, SongDetails, MovieDetails,AlbumDetails},
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
