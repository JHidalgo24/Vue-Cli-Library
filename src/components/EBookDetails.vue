<template>
  <div class="book">
    <h3 class="card-title">{{item.trackName}}</h3>
    <p class="card-text">Author: {{item.artistName}} &mdash; Rating: {{item.averageUserRating}}</p>

  </div>
</template>

<script>
import {Ebook} from "@/models/LibraryItems";

export default {
  name: "EbookDetails",
  props: {item: Ebook},
}
</script>

<style scoped>

</style>
