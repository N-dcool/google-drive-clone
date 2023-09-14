import style from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import {TbFile} from "react-icons/tb"

export const ShowFiles = () => {
    let {fileList} = fetchFiles();

    const openFile = (imageLink: string) => {
        window.open(imageLink, "_blank");
    }

  return (
    <div className={style.filesGrid}>
        {fileList.map((file: any) => {
            return(
                <div>
                    <div className={style.file} onClick={()=>openFile(file.imageLink)}>
                        <TbFile size={80}/>
                        <p>{file.imageName}</p>
                        {/* <img src={file.imageLink} alt="image" className={style.img}/> */}
                    </div>
                </div>
            )
        })}
    </div>
  )
}