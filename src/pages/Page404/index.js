import React from 'react';
import { useNavigate } from "react-router-dom";
import TextButton from '../../components/TextButton';
import {
  Container,
  Wrapper,
  ContainerNotFound
} from './styled';
import ImageBlogFemale from '../../assets/images/not-found.png';

const Page404 = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <ContainerNotFound image={ImageBlogFemale}>
          <div className="description">
            <span>Uh oh.</span>
            <p>We access this url sorry!.</p>
            <TextButton width="9.563" type="button" text="Back to home" onClick={() => goToHome()} />
          </div>
          <div className="image" />
        </ContainerNotFound>
      </Wrapper>
    </Container>
  )
}

export default Page404
