<template>
  <div class="song">
    <h3 class="card-title">Song: {{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}} &mdash; Release Date: {{item.releaseDate}}</p>

  </div>
</template>

<script>
import {Song} from "@/models/LibraryItems";

export default {
  name: "SongDetails",
  props: {item: Song},
}
</script>

<style scoped>

</style>
