import React, { lazy } from 'react';
import SearchBar from '../../components/SearchBar';
import LoadMore from '../../components/LoadMore';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';

const CardBlog = lazy(() => import('../../components/CardBlog'));
const NotFound = lazy(() => import('../../components/NotFound'));

const Blogs = ({ startPage, fetchSearchByQuery, loading, data, query, onChangeQuery, onLoadMore, onChangeFavorite, goToDetailBlog, typeQuery, loadmore }) => (
  <Container>
    <Wrapper>
      <SearchBar fetchSearchByQuery={fetchSearchByQuery} placeholder="Search" value={query} onChangeValue={onChangeQuery} count={data.length} typeQuery={typeQuery} />
      {loading && <div>Loading...</div>}
      {data.length > 0 ? (
        <>
          <ContainerBlog>
            {data.map((blog) => (
              <CardBlog key={blog.id} {...blog} onChangeFavorite={onChangeFavorite} goToDetailBlog={goToDetailBlog} typeQuery={typeQuery} />
            ))}
          </ContainerBlog>
          <LoadMore onClick={onLoadMore} startPage={startPage} typeQuery={typeQuery} />
        </>
      ) : (
        <NotFound />
      )}
    </Wrapper>
  </Container>
);

export default Blogs;
