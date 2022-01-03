/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from 'jotai';
import {
  blogsAtom,
  blogsFilteredAtom,
  queryAtom,
  queryFavoritesAtom,
  startPageAtom,
  selectedBlogAtom,
  blogsFavoritesFilteredAtom,
  changeFavoritePendingAtom,
} from '../../atoms/blog';
import { userAtom } from '../../atoms/user';
import { getAllBlogs, updateFavoriteBlog } from '../../services/blog';
import { waitFor } from '../../utils/waitFor';

const ARTICLES = 'Articles';
const FAVORITES = 'Favorites';
const LOADMORE = 'LoadMore';

const useGetBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ , setBlogs ] = useAtom(blogsAtom);
  const [ query, setQuery ] = useAtom(queryAtom);
  const [ queryFavorites, setQueryFavorites ] = useAtom(queryFavoritesAtom);
  const [ startPage, setStartPage ] = useAtom(startPageAtom);
  const [ blogsFiltered, setBlogsFiltered ] = useAtom(blogsFilteredAtom);
  const [ blogsFavoritesFiltered, setBlogsFavoritesFiltered ] = useAtom(blogsFavoritesFilteredAtom);
  const [ , setSelectedBlog ] = useAtom(selectedBlogAtom);
  const [ , setChangeFavoritePending ] = useAtom(changeFavoritePendingAtom);
  const [ user, ] = useAtom(userAtom);

  const onChangeFavorite = async (e, id, favorite, type = (location.pathname === '/' ? ARTICLES : FAVORITES)) => {
    e.stopPropagation();
    e.preventDefault();
    if (user) {
      console.log('user', user);
      const responseFavorite = await updateFavoriteBlog(id, favorite);
      if (typeof responseFavorite === 'object') {
        const newBlogs = type === ARTICLES ? blogsFiltered.map(blog => blog.id === responseFavorite.id ? { ...responseFavorite } : blog) : blogsFavoritesFiltered.map(blog => blog.id === responseFavorite.id ? { ...responseFavorite } : blog);
        console.log('newBlogs', newBlogs);
        if (type === ARTICLES) {
          setBlogs(newBlogs);
          setBlogsFiltered(newBlogs);
        } else if (type === FAVORITES) {
          setBlogsFavoritesFiltered(newBlogs.filter(blog => blog.favorite));
        }
      }
    } else {
      setChangeFavoritePending({id, favorite});
      await waitFor(100);
      navigate('/login', { state: { backgroundLocation: location } } );
    }
  };

  const goToDetailBlog = async (e, id, type = (location.pathname === '/' ? ARTICLES : FAVORITES)) => {
    e.stopPropagation();
    e.preventDefault();
    const blog = type === ARTICLES ? blogsFiltered.find(blog => blog.id === id) : blogsFavoritesFiltered.find(blog => blog.id === id);
    setSelectedBlog(blog);
    await waitFor(100);
    navigate('/detail-blog');
  };

  const onChangeQuery = (value, type = ARTICLES) => {
    if (type === ARTICLES) {
      setQuery(value);
    } else if (type === FAVORITES) {
      setQueryFavorites(value);
    }
  };

  const fetchAllBlog = async (page = startPage + 1, limit = 6, access = LOADMORE, type = (location.pathname === '/' ? ARTICLES : FAVORITES), activeLoadMore = false) => {
    try {
      setIsLoading(true);
      const queryDefault = type === ARTICLES ? query : queryFavorites;
      const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
      const response = await getAllBlogs(queryDefault, newPage, limit, type);
      if (Array.isArray(response)) {
        if (type === ARTICLES) {
          const newBlogs = (query === '' && access === LOADMORE && activeLoadMore) ? [...blogsFiltered, ...response] : [...response];
          setBlogs(newBlogs);
          setBlogsFiltered(newBlogs);
        } else if (user && type === FAVORITES) {
          console.log('entro en filter de favorites');
          const newBlogs = (queryFavorites === '' && access === LOADMORE && activeLoadMore) ? [...blogsFavoritesFiltered, ...response] : [...response];
          setBlogsFavoritesFiltered(newBlogs);
        }

        if (activeLoadMore) {
          setStartPage(page);
        } else if(!activeLoadMore && page >= 1) {
          setStartPage(1);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlog();
    return () => {
    }
  }, []);

  return [
    fetchAllBlog,
    onChangeQuery,
    blogsFiltered,
    query,
    isLoading,
    startPage,
    onChangeFavorite,
    goToDetailBlog,
    blogsFavoritesFiltered,
    queryFavorites,
  ];
}

export default useGetBlog;
