import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { database } from '@/firebaseCongif';
import { useEffect, useState } from 'react';

let files = collection(database, 'files');

export const fetchFiles = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);

  const getFolder = () => {
    if (userEmail) {
      let queryEmail = query(files, where('userEmail', '==', userEmail));
      if (!parentId) {
        onSnapshot(queryEmail, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === ''),
          );
        });
      } else {
        onSnapshot(queryEmail, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === parentId),
          );
        });
      }
    }
  };
  useEffect(() => {
    getFolder();
  }, [parentId, userEmail]);

  return { fileList };
};
