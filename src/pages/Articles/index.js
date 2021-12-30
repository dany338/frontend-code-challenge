import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import Blogs from '../../components/Blogs';

import { Container } from './styled';
import { apiBlogs } from '../../services/blog';
import { queryAtom, blogsFilteredAtom } from '../../atoms/blog';

const Articles = () => {
  const [query, setQuery] = useAtom(queryAtom);
  const [blogsFiltered, setBlogsFiltered] = useAtom(blogsFilteredAtom);

  const getBlogs = (value = '') => {
    // const response = await apiBlogs.getAll()
    console.log('getBlogs', value);
    setQuery(value);
  }

  useEffect(() => {
    getBlogs(query);
    return () => {
    }
  }, [])

  return (
    <Container>
      <Blogs data={blogsFiltered} query={query} onChangeQuery={getBlogs} />
    </Container>
  );
};

export default Articles;
