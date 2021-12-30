import React, { useEffect, lazy } from 'react';
import { useAtom } from 'jotai';
import SearchBar from '../../components/SearchBar';
import {
  Container,
  Wrapper,
  ContainerBlog
} from './styled';
import { apiBlogs } from '../../services/blog';
import { queryAtom, blogsFilteredAtom } from '../../atoms/blog';

import ImageBlogFemale from '../../assets/images/image-blog-female.png';
import ImageBlogMale from '../../assets/images/image-blog-male.png';
import ImageBlogNature from '../../assets/images/image-blog-nature.png';
import ImageBackground from '../../assets/images/background.png';

const CardBlog = lazy(() => import('../../components/CardBlog'));
const NotFound = lazy(() => import('../../components/NotFound'));

const Blogs = ({ data, query, onChangeQuery }) => {
  return (
    <Container>
      <Wrapper>
        <SearchBar placeholder="Search" value={query} onChangeValue={onChangeQuery} count={data.length} />
        {data.length > 0 ? (
          <ContainerBlog>
            <CardBlog image={ImageBlogFemale} colorPrice="primary" favorite={true} title="Keeping the dream alive by traveling the world" description="Integrate the latest technologies with an innovative platform" />
            <CardBlog image={ImageBlogMale} colorPrice="secundary" favorite={false} title="Keeping the dream alive by traveling the world" description="As part of our ongoing effort to enhance the traveler journey, we’re proud to partner with Portland International Airport (PDX) on the launch of a pilot program designed to shorten rider wait times at pickup." />
            <CardBlog image={ImageBackground} colorPrice="terciary" favorite={true} title="Keeping the dream alive by traveling the world" description="Integrate the latest technologies with an innovative platform" />
            <CardBlog image={ImageBlogFemale} colorPrice="primary" favorite={false} title="Keeping the dream alive by traveling the world" description="Integrate the latest technologies with an innovative platform" />
            <CardBlog image={ImageBlogMale} colorPrice="secundary" favorite={false} title="Keeping the dream alive by traveling the world" description="Integrate the latest technologies with an innovative platform" />
            <CardBlog image={ImageBlogNature} colorPrice="terciary" favorite={true} title="Keeping the dream alive by traveling the world" description="Integrate the latest technologies with an innovative platform" />
            <CardBlog image={ImageBackground} colorPrice="primary" favorite={true} title="Keeping the dream alive by traveling the world" description="Integrate the latest technologies with an innovative platform" />
          </ContainerBlog>
        ) : (
          <NotFound />
        )}
      </Wrapper>
    </Container>
  );
};

export default Blogs;
