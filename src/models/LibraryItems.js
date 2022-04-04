


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


class Album{
    collectionName = '';
    artistName = '';
    trackCount = '';
    releaseDate = ''
    img = ''

    constructor(collectionName, artistName, trackCount,releaseDate, img) {
        this.collectionName = collectionName;
        this.artistName = artistName;
        this.trackCount = trackCount;
        this.releaseDate = releaseDate
        this.img = img
    }
}

class Movie {
    trackName = '';
    genre = ''
    description = ''
    releaseDate = ''
    contentRating = ''
    img = ''
    constructor(trackName, genre, description, releaseDate, contentRating,img){
        this.trackName = trackName;
        this.genre = genre
        this.description = description
        this.releaseDate = releaseDate
        this.contentRating = contentRating
        this.img = img
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
    img = ''

    constructor(artistName, trackName, releaseDate,description,averageUserRating,img) {
        this.artistName = artistName;
        this.trackName = trackName;
        this.releaseDate = releaseDate;
        this.description = description
        this.averageUserRating = averageUserRating
        this.img = img
    }

}



export {LibraryItem,Album, Movie,Song, EBook};
