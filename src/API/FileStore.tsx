import { database } from '@/firebaseCongif';
import { collection, addDoc } from 'firebase/firestore';

let files = collection(database, 'files');

export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string,
  ownerEmail: string,
) => {
  try {
    addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      parentId: parentId,
      userEmail: userEmail,
      ownerEmail: ownerEmail,
      isFolder: false,
    });
  } catch (e) {
    console.log(e);
  }
};

export const addFolder = (payload: FolderPayload) => {
  try {
    addDoc(files, {
      folderName: payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList,
      parentId: payload.parentId,
      userEmail: payload.userEmail,
    });
  } catch (e) {
    console.log(e);
  }
};
