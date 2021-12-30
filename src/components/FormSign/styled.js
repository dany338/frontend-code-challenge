import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  .image {
    background-size: cover;
    background-repeat: no-repeat;
	  background-position: bottom;
    background-image: url(${({ image }) => image});
    height: 26.625rem;
    border-radius: 5px;
    width: 100%;

    @media screen and (max-width: 960px) {
      height: 26.625rem;
    }

    @media screen and (max-width: 880px) {
      height: 16.625rem;
      display: none;
    }

    @media screen and (max-width: 500px) {
      height: 12.625rem;
      display: none;
    }

    @media screen and (max-width: 260px) {
      height: 10.625rem;
      display: none;
    }
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: middle;
    border-radius: 3px;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title { // > span:nth-child(1)
      font-family: Roboto, "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 1.938rem;
      line-height: 2.5rem;
      text-align: center;
      letter-spacing: -0.01em;
      color: ${Colors.backgroundColorModal};
    }

    .description {
      font-family: Roboto, "Helvetica Neue", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 1.063rem;
      line-height: 1.625rem;
      text-align: center;
      color: ${Colors.colorDescriptionSign};
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .link {
        /* position: absolute;
        top: 0;
        right: 6.875rem;
        width: 5.25rem;
        height: 100%; */
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          cursor: pointer;
          color: ${Colors.colorTextResultsFounded};
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 900;
          font-family: Roboto, "Helvetica Neue", sans-serif;
        }
      }

    }
  }
`;