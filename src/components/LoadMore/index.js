import React from 'react'
import { Container, Wrapper } from './styled';

const LoadMore = ({ startPage, onClick, typeQuery }) => (
  <Container>
    <Wrapper onClick={() => onClick(startPage + 1, 6, 'LoadMore', typeQuery, true)}>
      <span>Load more</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.52642 0.21967C6.23353 -0.0732233 5.75866 -0.0732233 5.46576 0.21967C5.17287 0.512563 5.17287 0.987437 5.46576 1.28033L9.43543 5.25H0.75C0.335786 5.25 0 5.58579 0 6C0 6.41421 0.335786 6.75 0.75 6.75H9.43543L5.46576 10.7197C5.17287 11.0126 5.17287 11.4874 5.46576 11.7803C5.75866 12.0732 6.23353 12.0732 6.52642 11.7803L11.7328 6.57398C11.8962 6.4364 12 6.23033 12 6C12 5.76967 11.8962 5.56359 11.7328 5.42601L6.52642 0.21967Z"/>
      </svg>
    </Wrapper>
  </Container>
)

export default LoadMore;
