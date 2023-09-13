import { database } from "@/firebaseCongif"
import { collection, addDoc } from "firebase/firestore"

let files = collection(database, "files")

export const addFiles = (imageLink : string) => {
    try{
        addDoc(files, {
            imageLink: imageLink
        })
    }catch(e){
        console.log(e);
    }
}
