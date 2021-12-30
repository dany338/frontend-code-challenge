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

export const ContainerBlog = styled.div`
  padding: 3.125rem 0rem;
  display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 40px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    padding: 1.438rem 0rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 2.688rem;
    line-height: 3.313rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${Colors.backgroundColorModal};
    width: 42.5rem;
    @media screen and (max-width: 960px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 880px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    @media screen and (max-width: 260px) {
      width: 100%;
    }
  }

  .description {
    padding: 1.438rem 0rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 1.313rem;
    line-height: 2rem;
    text-align: center;
    color: ${Colors.colorTextLinkNormal};
    width: 42.5rem;
    @media screen and (max-width: 960px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 880px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    @media screen and (max-width: 260px) {
      width: 100%;
    }
  }

  .image {
    padding: 1.438rem 0rem;
    background-size: contain;
    background-repeat: no-repeat;
	  background-position: center center;
    background-image: url(${({ image }) => image});
    height: 26.625rem;
    border-radius: 5px;
    width: 42.5rem;
    @media screen and (max-width: 960px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 880px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    @media screen and (max-width: 260px) {
      width: 100%;
    }
  }

  .content {
    padding: 1.438rem 0rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 1.063rem;
    line-height: 1.625rem;
    color: ${Colors.backgroundColorModal};
    text-align: justify;
    width: 42.5rem;
    @media screen and (max-width: 960px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 880px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    @media screen and (max-width: 260px) {
      width: 100%;
    }
  }

  .author {
    padding: 1.438rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 42.5rem;
    @media screen and (max-width: 960px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 880px) {
      width: 42.5rem;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    @media screen and (max-width: 260px) {
      width: 100%;
    }

    .info {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .avatar {

      }

      .name {
        padding: 0rem 0.938rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        * {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: 900;
          font-size: 0.75rem;
          line-height: 0.875rem;
        }

        .authorName {
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: ${Colors.backgroundColorModal};
        }

        .published {
          color: ${Colors.colorTextLinkNormal};
          opacity: 0.7;
        }
      }
    }

    .share {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .shareIcons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        width: 100%;

        .shareText {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 0.75rem;
          line-height: 0.875rem;
          color: ${Colors.colorTextResultsFounded};
          transform: rotate(-0.32deg);
        }

        img {
          width: 1.375rem;
          height: 1.375rem;
        }
      }
    }
  }
`;