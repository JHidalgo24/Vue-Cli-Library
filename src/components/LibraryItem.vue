<template>
  <div class="card" :class="{'border-success': itemStatus}">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button v-if="itemStatus" @click="item.checkOut()">Check Out</button>
      <button v-else @click="item.checkIn()">Check In</button>
      <!--                <button v-if="removeMethod" @click="removeMethod(item);">Remove</button>-->
      <!--                <button @click="$emit('remove-me', item);">Remove</button>-->
      <button @click="emitSelfRemove">Remove</button>
      <button @click="emitSelfAdd">Add to Bag</button>
    </div>
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails";
import AlbumDetails from "@/components/AlbumDetails";
import SongDetails from "@/components/SongDetails";
import EBookDetails from "@/components/EBookDetails";

export default {
  name: "LibraryItem",
  components: {EBookDetails, SongDetails, MovieDetails,AlbumDetails},
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeMethod: {
      type: Function,
    }
  },
  methods:{
    emitSelfAdd(){
      this.$emit('update-cart',this.item)
    },
    emitSelfRemove(){
      this.$emit('remove-store',this.item)
    }
  }
  ,
  computed: {
    typeOfItem() {
      return this.item.constructor.name + 'Details';
    },
    itemStatus(){
      return this.item.isAvailable();
    }
  },
}
</script>

<style scoped>

</style>
