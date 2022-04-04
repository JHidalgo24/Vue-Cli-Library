<template>
  <div class="book">

    <img :src=item.img style="width: 25%" class="card-img-top" alt="...">

    <h3 class="card-title">Album: {{item.collectionName}}</h3>
    <p class="card-text">Artist: {{item.artistName}} | Track Count: {{item.trackCount}}</p>
    <p class="card-text">Release Date: {{item.releaseDate.slice(0,10)}} </p>
  </div>
</template>


<script>
import {Album} from "@/models/LibraryItems";

export default {
  name: "AlbumDetails",
  props:{item:Album}
}
</script>

<style scoped>

</style>