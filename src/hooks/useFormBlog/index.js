import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import colorPrice from '../../utils/colorPrice';
import formatDate from '../../utils/formatDate';
import { blogsAtom, blogsFilteredAtom, blogsFavoritesFilteredAtom, startPageAtom } from '../../atoms/blog';
import { fetchCreateBlog, fetchUpdateBlog, fetchDeleteBlog } from '../../services/blog';
import useAuth from '../../hooks/useAuth';
import { waitFor } from '../../utils/waitFor';

const useFormBlog = (values) => {
  const navigate = useNavigate();
  const [ user ] = useAuth();
  const [ blogs, setBlogs ] = useAtom(blogsAtom);
  const [ blogsFiltered, setBlogsFiltered ] = useAtom(blogsFilteredAtom);
  const [ blogsFavoritesFiltered, setBlogsFavoritesFiltered ] = useAtom(blogsFavoritesFilteredAtom);
  const [ , setStartPage ] = useAtom(startPageAtom);
  const [ isLoading, setIsLoading ] = useState(false);

  const createBlog = async () => {
    setIsLoading(true);
    const today = new Date();
    const newValues = {
      ...values,
      colorPrice: colorPrice(values.price),
      favorite: false,
      published: formatDate(today),
      author: user?.fullname,
      userId: user?.id,
    };
    const response = await fetchCreateBlog(newValues);
    if (typeof response === 'object') {
      setStartPage(1);
      const newBlogs = [ response, ...blogs ].slice(0, 6);
      const newBlogsFiltered = [ response, ...blogsFiltered ].slice(0, 6);
      setBlogs(newBlogs);
      setBlogsFiltered(newBlogsFiltered);
      if (response.favorite) {
        const newBlogFavoritesFiltered = [ response, ...blogsFavoritesFiltered];
        setBlogsFavoritesFiltered(newBlogFavoritesFiltered);
      }
      await waitFor(100);
      navigate(-1);
    }
    setIsLoading(false);
  };

  const updateBlog = async () => {
    setIsLoading(true);
    const newValues = {
      ...values,
      colorPrice: colorPrice(values.price),
    };
    const response = await fetchUpdateBlog(newValues);
    if (typeof response === 'object') {
      const newBlogs = blogs.map(blog => blog.id === response.id ? { ...response } : blog);
      setBlogs(newBlogs);
      setBlogsFiltered(newBlogs);
      if (response.favorite) {
        setBlogsFavoritesFiltered(newBlogs.filter(blog => blog.favorite));
      }
      await waitFor(100);
      navigate('/');
    }
    setIsLoading(false);
  };

  const deleteBlog = async () => {
    setIsLoading(true);
    const response = await fetchDeleteBlog(values);
    if (typeof response === 'object') {
      const newBlogs = blogs.filter(blog => blog.id !== values.id);
      setBlogs(newBlogs);
      setBlogsFiltered(newBlogs);
      setBlogsFavoritesFiltered(newBlogs.filter(blog => blog.favorite))
    }
    setIsLoading(false);
  };

  return [
    createBlog,
    updateBlog,
    isLoading,
    deleteBlog,
  ];
}

export default useFormBlog;
