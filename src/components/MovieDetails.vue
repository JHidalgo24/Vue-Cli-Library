<template>
  <div class="movie">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Genre: {{item.genre}}</p>
  </div>
</template>

<script>
import {Movie} from "@/models/LibraryItems";

export default {
  name: "MovieDetails",
  props: {item: Movie},
}
</script>

<style scoped>

</style>
