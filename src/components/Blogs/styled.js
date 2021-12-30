import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 7.938rem 0rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const Grids = styled.div`
  padding: 3.125rem 0rem;
  display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 20px;
  width: 100%;
`;

export const ContainerBlog = styled.div`
  padding: 3.125rem 0rem;
  display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
  width: 100%;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
  }
`;