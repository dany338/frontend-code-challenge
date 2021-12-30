import React from 'react';
import { useAtom } from 'jotai';
import TextButton from '../TextButton';
import {
  Container,
  Wrapper,
  ContainerNotFound
} from './styled';
import ImageBlogFemale from '../../assets/images/not-found.png';
import { queryAtom } from '../../atoms/blog';

const NotFound = () => {
  const [, setQuery] = useAtom(queryAtom);

  const handleCleanSearch = () => {
    setQuery('');
  };

  return (
    <Container>
      <Wrapper>
        <ContainerNotFound image={ImageBlogFemale}>
          <div className="description">
            <span>Uh oh.</span>
            <p>We ran into an issue, but don’t worry, we’ll take care of it for sure.</p>
            <TextButton width="9.563" type="button" text="Back to safety" onClick={() => handleCleanSearch()} />
          </div>
          <div className="image" />
        </ContainerNotFound>
      </Wrapper>
    </Container>
  )
}

export default NotFound
