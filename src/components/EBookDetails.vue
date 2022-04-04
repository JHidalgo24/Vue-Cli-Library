<template>
  <div class="book">
    <img :src=item.img style="width: 25%" class="card-img-top" alt="...">


    <h3 class="card-title">Ebook: {{item.trackName}}</h3>
    <p class="card-text">Author: {{item.artistName}} &mdash; Rating: {{item.averageUserRating}}</p>

  </div>
</template>

<script>
import Ebook from "@/models/LibraryItems";

export default {
  name: "EbookDetails",
  props: {item: Ebook},
}
</script>

<style scoped>

</style>
