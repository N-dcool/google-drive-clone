import { useRouter } from 'next/router';
import { UploadFiles } from '@/components/UploadFiles';
import ShowFiles from '@/components/ShowFiles';
import { TopBar } from '@/components/Topbar';
import { useFetchSession } from '@/hooks/useSession';

export default function Folde() {
  let router = useRouter();
  let { session } = useFetchSession();
  let parentId = router?.query?.id;
  // console.log(parentId + ' in folder');
  return (
    <div>
      <TopBar />
      {session ? (
        <>
          <UploadFiles parentId={parentId as string} />
          <ShowFiles parentId={parentId as string} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
