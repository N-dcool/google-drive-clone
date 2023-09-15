import Button from '../common/Button/Button';
import { signIn, signOut } from 'next-auth/react';
import { useFetchSession } from '@/hooks/useSession';
import styles from './Topbar.module.scss';

export function TopBar() {
  let { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <>
          <img className={styles.profileImg} src={session?.user.image as string} />
          <Button onClick={() => signOut()} btnClass={'btn-primary'} title={'Sign Out!'} />
        </>
      ) : (
        <Button onClick={() => signIn()} btnClass={'btn-primary'} title={'Sign In!'} />
      )}
    </div>
  );
}
