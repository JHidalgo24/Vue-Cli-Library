<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
      &nbsp;
      <span>
      <form @submit.prevent="searchMedia">
        <a @click="cartVisibility = !cartVisibility"><span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i>{{this.cart.length}}</span></a>
        <input v-model="searchTerm" type="text">
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
      </span>
    </nav>

    <div v-show="cartVisibility" class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <hello-universe msg="Welcome to Your Vue.js App"/>-->
      <library-list @check-out-lib="checkOutLibrary" :library="library" @update-cart="receive"></library-list>
    </div>
    <div v-show="!cartVisibility" class="container-fluid mt-3">
      <h1>Cart</h1>
      <cart-list @check-out="updateCheckouts" @remove-cart="removeCart" :cart="cart"></cart-list>
    </div>
  </div>
</template>

<script>
import LibraryList from "@/components/LibraryList";
import CartList from "@/components/CartList";
import CartCollection from "@/models/CartCollection";
import LibraryCollection from "@/models/LibraryCollection";
import {Movie,EBook,Song} from "@/models/LibraryItems";

const axios = require('axios').default;

export default {
  name: 'App',
  components: {LibraryList, CartList},
  data: function () {
    return {
      cart: new CartCollection(),
      cartVisibility: true,
      searchTerm: '',
      library: new LibraryCollection(),
      searchResults: []
    }
  }
  ,methods:{
    addSearchResults(){

      for (let i = 0; i < this.searchResults.length; i++) {
        let currentItem = this.searchResults[i]
        switch (currentItem.kind){
          case 'ebook':
            console.log('added',currentItem)
            this.library.addItem(new EBook(currentItem.artistName, currentItem.trackName, currentItem.releaseDate, currentItem.description, currentItem.averageUserRating?? 'No Rating' ))
            break;
          case 'song':
            this.library.addItem(new Song(currentItem.artistName, currentItem.trackName, currentItem.releaseDate))
            break;
          case 'feature-movie':
            this.library.addItem(new Movie(currentItem.trackName, currentItem.genre, currentItem.description, currentItem.releaseDate, currentItem.contentRating))
            break;
        }

      }
      this.searchResults = []
      console.log(this.library.length,'library items')

    },
    receive(e){
      if (!this.cart.find(ex => ex === e)){
        this.cart.addItem(e);
      }
    },
    removeCart(e){
      this.cart.removeItem(e)
    },
    updateCheckouts(){
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].checkOut();
      }

    },
    checkOutLibrary(e){
      e.checkOut()

    }
    ,
    searchMedia(){


      if(this.searchTerm){
        // clear results
        this.library = new LibraryCollection()
        this.searchResults = []

        // build request arguments
        let url = 'https://itunes.apple.com/search?';

        let config = {
          params:{
            term: this.searchTerm,
            media:'music',
            entity:'song',
            limit:5,
          },
          responseType: 'json'
        }

        // TODO: build ajax request arguments
        axios.get(url,config)
            .then(response => {
              if (response.data.results.length > 0){
                this.searchResults = response.data.results;
                //set the results array using my custom collection decorator
                console.log(this.searchResults)
                //or without a customer decorator
                //this.searchResults = response.data.items
              }
            }).catch(error => {
          console.error('AJAX SEARCH ERROR:', error)

          //TODO: let user know


        }).finally(()=>{
          //remove loading message
          //show results page

          this.addSearchResults()


        })


        // execute ajax request using promises

        // TODO: write ajax request

      }
    }
  }

}
</script>

<style scoped>
a{
 color: white;
}
</style>
