import { ChangeEvent, useState } from "react"
import Button from "../common/Button/Button"
import styles from "./UploadFiles.module.scss"
import  {fileUpload}  from "@/API/FileUpload"
import { CommonProgress } from "../common/Progress"

export const UploadFiles = () => {
  const [showInput, setShowInput] = useState(false);
  const [files, setFiles] = useState({});
  const [progress, setProgress] = useState(0);

  const UploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // console.log(event.target.files);
    fileUpload(file, setProgress);
  }

  return (
    <div className={styles.UploadMain}>
        <Button onClick={()=>setShowInput(!showInput)} title="Upload Files" btnClass="btn-success"/>
        {showInput ? <input onChange={(event)=>UploadFile(event)} type="file" multiple  className="file-input file-input-bordered file-input-success w-full max-w-xs" />:<></>}
        <Button title="Create Folder" btnClass="btn-outline btn-success"/>
        {progress===0 || progress===100? <></>:<CommonProgress progress={progress}/>}
    </div>
  )
}