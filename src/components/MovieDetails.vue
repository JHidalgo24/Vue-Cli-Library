<template>
  <div class="movie">

    <img :src=item.img style="width: 25%" class="card-img-top" alt="...">


    <h3 class="card-title">Movie: {{item.trackName}}</h3>
    <p class="card-text">Genre: {{item.genre}} - Release Date: {{item.releaseDate.slice(0,10)}}</p>
    <p>Age Rating: {{item.contentRating}}</p>
    <p>Description: {{item.description}}</p>

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
