import React from 'react';
import useGetBlog from '../../hooks/useGetBlog';
import Blogs from '../../components/Blogs';

import { Container } from './styled';

const Favorites = () => {
  const [
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
  ] = useGetBlog();

  return (
    <Container>
      <Blogs
        startPage={startPage}
        fetchSearchByQuery={fetchAllBlog}
        loading={isLoading}
        data={blogsFavoritesFiltered}
        query={queryFavorites}
        onChangeQuery={onChangeQuery}
        onLoadMore={fetchAllBlog}
        onChangeFavorite={onChangeFavorite}
        goToDetailBlog={goToDetailBlog}
        typeQuery="Favorites"
      />
    </Container>
  );
};

export default Favorites;
