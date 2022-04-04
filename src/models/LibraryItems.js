
function LibraryItem(media, removeMethod){
    // this is the parent class that all books,movies,etc extend

    // list of possible statuses (enum)
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'}

    // set the default status
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN
    }

    //  option 1
    // media.remove = function(){
    //     return removeMethod(this);
    // }

    // option 2
    media.remove = removeMethod;

    // media.remove = function(){
    //     return removeMethod();
    // }

    return media;
}

// this is a constructor function
// we use TitleCase to represent classes/prototypes/constructor functions
function Book(title, pages){
    this.title = title;
    this.pages = pages;
}

// or ES6 syntactic sugar (these are not really classes in the traditional sense)
class Movie {
    trackName = '';
    genre = ''
    description = ''
    releaseDate = ''
    contentRating = ''
    constructor(trackName, genre, description, releaseDate, contentRating){
        this.trackName = trackName;
        this.genre = genre
        this.description = description
        this.releaseDate = releaseDate
        this.contentRating = contentRating
    }
}

class Album{
    collectionName = '';
    artistName = '';
    trackCount = '';
    releaseDate = ''

    constructor(collectionName, artistName, trackCount,releaseDate) {
        this.collectionName = collectionName;
        this.artistName = artistName;
        this.trackCount = trackCount;
        this.releaseDate = releaseDate
    }
}

class Song{
    artistName = '';
    trackName = '';
    releaseDate = '';

    constructor(artistName, trackName, releaseDate) {
        this.artistName = artistName;
        this.trackName = trackName;
        this.releaseDate = releaseDate;
    }

}

class EBook{
    artistName = '';
    trackName = '';
    releaseDate = '';
    description = '';
    averageUserRating = 0;

    constructor(artistName, trackName, releaseDate,description,averageUserRating) {
        this.artistName = artistName;
        this.trackName = trackName;
        this.releaseDate = releaseDate;
        this.description = description
        this.averageUserRating = averageUserRating
    }

}



export {LibraryItem, Book, Movie, Album,Song, EBook};
