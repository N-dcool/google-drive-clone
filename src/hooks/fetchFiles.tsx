import { onSnapshot, collection } from 'firebase/firestore';
import { database } from '@/firebaseCongif';
import { useEffect, useState } from 'react';

let files = collection(database, 'files');

export const fetchFiles = (parentId: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);

  const getFolder = () => {
    // console.log(parentId);
    if (!parentId) {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((item) => {
              return { ...item.data(), id: item.id };
            })
            .filter((item: any) => item.parentId === ''),
        );
      });
    } else {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((item) => {
              return { ...item.data(), id: item.id };
            })
            .filter((item: any) => item.parentId === parentId),
        );
      });
    }
  };

  useEffect(() => {
    getFolder();
  }, [parentId]);

  return { fileList };
};
