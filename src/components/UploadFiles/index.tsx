import { ChangeEvent, useState } from 'react';
import Button from '../common/Button/Button';
import styles from './UploadFiles.module.scss';
import { fileUpload } from '@/API/FileUpload';
import { CommonProgress } from '../common/Progress';
import { useFetchSession } from '@/hooks/useSession';
import { addFolder } from '@/API/FileStore';

export const UploadFiles = ({ parentId }: UploadFiles) => {
  const { session } = useFetchSession();

  const [showInput, setShowInput] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [progress, setProgress] = useState(0);

  const UploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId, session?.user.email as string, 'ownerEmail');
  };

  const uploadFolder = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || '',
      userEmail: session?.user.email,
    };

    addFolder(payload);
    setFolderName('');
  };

  return (
    <div className={styles.UploadMain}>
      <Button onClick={() => setShowInput(!showInput)} title="Add a Files" btnClass="btn-success" />
      {showInput ? (
        <input
          onChange={(event) => {
            UploadFile(event);
            setShowInput(!showInput);
          }}
          type="file"
          className="file-input file-input-bordered file-input-success w-full max-w-xs"
        />
      ) : (
        <></>
      )}
      <Button
        title="Create a Folder"
        btnClass="btn-outline btn-success"
        onClick={() => {
          setShowTextInput(!showTextInput);
        }}
      />
      {showTextInput ? (
        <>
          <input
            type="text"
            placeholder="Type here"
            onChange={(event) => setFolderName(event.target.value)}
            className="input input-bordered input-success w-full max-w-xs"
          />
          <Button
            onClick={() => {
              uploadFolder();
              setShowTextInput(!showTextInput);
            }}
            title="Create"
            btnClass="btn-success"
          />
        </>
      ) : (
        <></>
      )}
      {progress === 0 || progress === 100 ? <></> : <CommonProgress progress={progress} />}
    </div>
  );
};
