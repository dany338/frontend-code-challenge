import React from 'react';
import useGetBlog from '../../hooks/useGetBlog';
import Blogs from '../../components/Blogs';

import { Container } from './styled';

const Articles = () => {
  const [
    fetchAllBlog,
    onChangeQuery,
    blogsFiltered,
    query,
    isLoading,
    startPage,
    onChangeFavorite,
    goToDetailBlog,
  ] = useGetBlog();

  return (
    <Container>
      <Blogs
        startPage={startPage}
        fetchSearchByQuery={fetchAllBlog}
        loading={isLoading}
        data={blogsFiltered}
        query={query}
        onChangeQuery={onChangeQuery}
        onLoadMore={fetchAllBlog}
        onChangeFavorite={onChangeFavorite}
        goToDetailBlog={goToDetailBlog}
        typeQuery="Articles"
      />
    </Container>
  );
};

export default Articles;
