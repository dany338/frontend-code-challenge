import { useAtom } from 'jotai';
import { userAtom, authedAtom } from '../../atoms/user';
import { asyncLocalStorage } from '../../utils/localStorage';

const useAuth = () => {
  const [user, setUser ] = useAtom(userAtom);
  const [authed, setAuthed ] = useAtom(authedAtom);

  const onLogout = () => {
    setUser(null);
    setAuthed(false);
    asyncLocalStorage.removeItem('user');
  }

  return [
    user,
    authed,
    onLogout
  ];
}

export default useAuth;
