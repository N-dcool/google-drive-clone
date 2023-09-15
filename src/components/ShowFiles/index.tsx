import style from './ShowFiles.module.scss';
import { fetchFiles } from '@/hooks/fetchFiles';
import { TbFile } from 'react-icons/tb';
import { FcOpenedFolder } from 'react-icons/fc';
import { useRouter } from 'next/router';
import { useFetchSession } from '@/hooks/useSession';

export default function ShowFiles({ parentId }: ShowFiles) {
  // console.log(parentId);
  let { session } = useFetchSession();
  let { fileList } = fetchFiles(parentId, session?.user?.email as string);
  const router = useRouter();

  const openFile = (imageLink: string) => {
    window.open(imageLink, '_blank');
  };

  return (
    <div className={style.filesGrid}>
      {fileList.map((file: { id: ''; isFolder: false; folderName: ''; imageLink: ''; imageName: '' }) => {
        return (
          <div key={file.id}>
            <div className={style.file}>
              {file?.isFolder ? (
                <div
                  onClick={() => {
                    router.push(`/folder?id=${file.id}`);
                  }}
                >
                  <FcOpenedFolder size={80} /> <p>{file.folderName}</p>
                </div>
              ) : (
                <div className={style.file} onClick={() => openFile(file.imageLink)}>
                  <img src={file?.imageLink} alt={file.id} className={style.img} /> <p>{file.imageName}</p>{' '}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
