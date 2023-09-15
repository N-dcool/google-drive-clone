import { useRouter } from 'next/router';
import { UploadFiles } from '@/components/UploadFiles';
import ShowFiles from '@/components/ShowFiles';

export default function Folde() {
  let router = useRouter();
  let parentId = router?.query?.id;
  // console.log(parentId + ' in folder');
  return (
    <div>
      <UploadFiles parentId={parentId as string} />
      <ShowFiles parentId={parentId as string} />
    </div>
  );
}
