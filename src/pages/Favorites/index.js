/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import Blogs from '../../components/Blogs';

import { Container } from './styled';
import { apiBlogs } from '../../services/blog';
import { queryFavoritesAtom, blogsFavoritesFilteredAtom } from '../../atoms/blog';

const Favorites = () => {
  const [queryFavorites, setQueryFavorites] = useAtom(queryFavoritesAtom);
  const [blogsFavoritesFiltered, setBlogsFavoritesFiltered] = useAtom(blogsFavoritesFilteredAtom);

  const getBlogsFavorites = (value = '') => {
    // const response = await apiBlogs.getAll()
    console.log('getBlogsFavorites', value);
    setQueryFavorites(value);
  }

  useEffect(() => {
    getBlogsFavorites(queryFavorites);
    return () => {
    }
  }, [])

  return (
    <Container>
      <Blogs data={blogsFavoritesFiltered} query={queryFavorites}  onChangeQuery={getBlogsFavorites} />
    </Container>
  );
};

export default Favorites;
