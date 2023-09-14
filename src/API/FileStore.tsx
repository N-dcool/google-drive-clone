import { database } from "@/firebaseCongif"
import { collection, addDoc } from "firebase/firestore"

let files = collection(database, "files")

export const addFiles = (imageLink : string, imageName: string, parentId: string, userEmail: string, ownerEmail: string) => {
    try{
        addDoc(files, {
            imageLink: imageLink,
            imageName: imageName,
            parentId: parentId,
            userEmail: userEmail,
            ownerEmail: ownerEmail,
        })
    }catch(e){
        console.log(e);
    }
}
