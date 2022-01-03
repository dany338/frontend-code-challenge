import styled from 'styled-components';
import Colors from '../../styleguide/colors';

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

export const ContainerNotFound = styled.div`
  padding: 3.125rem 0rem;
  display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 5px;
  width: 100%;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    span {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 3.25rem;
      line-height: 3.813rem;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.01em;
      color: ${Colors.colorUhOh};
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.25rem 0rem;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 1.063rem;
      line-height: 1.625rem;
      display: flex;
      align-items: center;
      text-align: center;
      color: ${Colors.colorDescriptionSign};
      width: 19.438rem;
      @media screen and (max-width: 900px) {
        width: 19.438rem;
      }

      @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }

  .image {
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${({ image }) => image});
    height: 26.625rem;
    border-radius: 5px;
    width: 100%;
  }

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