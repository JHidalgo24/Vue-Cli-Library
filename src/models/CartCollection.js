import Collection from "@/models/Collection";
import {LibraryItem} from "@/models/LibraryItems";

export default function CartCollection(){
    return new Collection(LibraryItem);

    // or
    //let arr =  new Collection(LibraryItem);
    //arr.something = '';
    //return arr;
}