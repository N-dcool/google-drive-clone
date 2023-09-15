import ShowFiles from '../ShowFiles';
import { TopBar } from '../Topbar';
import { UploadFiles } from '../UploadFiles';
import style from './Home.module.scss';
import { useFetchSession } from '@/hooks/useSession';

export const HomeComponent = () => {
  let { session } = useFetchSession();
  return (
    <>
      <TopBar />
      {session ? (
        <>
          {' '}
          <UploadFiles parentId="" />
          <ShowFiles parentId="" />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
