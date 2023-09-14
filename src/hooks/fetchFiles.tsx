import { onSnapshot, collection} from "firebase/firestore"
import { database } from "@/firebaseCongif"
import { useEffect, useState } from "react"

let files = collection(database, "files")

export const fetchFiles = () =>{
    const [fileList, setFileList] = useState([{}]);

    useEffect(() => {
        onSnapshot(files, (response) => {
            setFileList(
                response.docs.map((item) => {
                    return {...item.data(), id: item.id}     
                }
            ))
        })
    },[]);

    return {fileList};
    
}