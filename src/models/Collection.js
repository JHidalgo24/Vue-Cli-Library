import {LibraryItem} from "@/models/LibraryItems";
//import {LibraryItem} from "./LibraryItems";

export default function Collection(){
    // inherit array functionality (ES6+)
    this.__proto__ = [];

    this.push('toast');
    this.splice(0,1);


    this.addItem = function(item){

        this.push(new LibraryItem(item, (collection =>
                    function(){
                        collection.removeItem(this); // this === item
                    }
            )(this) // this === collection
        ));
        return this;
    }


    this.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }


    this.removeAll = function(){

        this.splice(0, this.length);

        return this;
    }
}
