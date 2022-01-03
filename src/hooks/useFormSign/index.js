import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { getUserByCredentials , createAccount} from '../../services/user';
import { updateFavoriteBlog } from '../../services/blog';
import { blogsAtom, blogsFilteredAtom, blogsFavoritesFilteredAtom, changeFavoritePendingAtom } from '../../atoms/blog';
import { userAtom, authedAtom } from '../../atoms/user';
import { waitFor } from '../../utils/waitFor';

const useFormSign = (values) => {
  const navigate = useNavigate();
  const [ , setUser ] = useAtom(userAtom);
  const [ , setAuthed ] = useAtom(authedAtom);
  const [ changeFavoritePending, setChangeFavoritePending ] = useAtom(changeFavoritePendingAtom);
  const [ , setBlogs ] = useAtom(blogsAtom);
  const [ blogsFiltered, setBlogsFiltered ] = useAtom(blogsFilteredAtom);
  const [ blogsFavoritesFiltered, setBlogsFavoritesFiltered ] = useAtom(blogsFavoritesFilteredAtom);
  const [ isLoading, setIsLoading ] = useState(false);

  const createUser = async () => {
    setIsLoading(true);
    console.log('createUser', values);
    const response = await createAccount(values);
    if (typeof response === 'object') {
      setUser(response);
      setAuthed(true);
    }
    setIsLoading(false);
  };

  const loginUser = async () => {
    setIsLoading(true);
    console.log('loginUser', values);
    const response = await getUserByCredentials(values);
    if (Array.isArray(response) && response.length > 0) {
      setUser(response[0]);
      setAuthed(true);
      if (changeFavoritePending) {
        const responseFavorite = await updateFavoriteBlog(changeFavoritePending.id, changeFavoritePending.favorite);
        if (typeof responseFavorite === 'object') {
          if (blogsFiltered.length > 0) {
            const newBlogs = blogsFiltered.map(blog => blog.id === responseFavorite.id ? { ...responseFavorite } : blog);
            setBlogs(newBlogs);
            setBlogsFiltered(newBlogs);
            setBlogsFavoritesFiltered(newBlogs.filter(blog => blog.favorite));
          } else if (blogsFavoritesFiltered.length > 0) {
            const newBlogs = blogsFavoritesFiltered.map(blog => (blog.id === responseFavorite.id && changeFavoritePending.favorite) ? { ...responseFavorite } : blog);
            setBlogsFavoritesFiltered(newBlogs);
          }
          setChangeFavoritePending(null);
        }
      }
      await waitFor(100);
      navigate(-1);
    }
    setIsLoading(false);
  };

  return [
    createUser,
    loginUser,
    isLoading,
  ];
}

export default useFormSign;
