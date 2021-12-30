import styled from 'styled-components';
import Colors from '../../styleguide/colors';

const labelPriceColor = {
  primary: Colors.backgroundColorBadgeGreen,
  secundary: Colors.backgroundColorBadgeYellow,
  terciary: Colors.backgroundColorBadgeRed,
};

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 24px 64px rgba(22, 27, 45, 0.05);
  border-radius: 5px;
	min-height: 200px;
	font-weight: bold;
	position: relative;
	overflow: hidden;
  width: 100%;
  height: auto;

  .header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      border-radius: 100px;
      background-color: ${({ colorPrice }) => labelPriceColor[colorPrice]};
      span {
        color: #fff;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: 900;
        font-size: 0.75rem;
        letter-spacing: 0.08em;
        line-height: 0.875rem;
        padding: 0.313rem 0.563rem;
        font-family: "Roboto", sans-serif;
      }
    }

    img {
      cursor: pointer;
    }
  }

  .image {
    background-size: cover;
    background-repeat: no-repeat;
	  background-position: bottom;
    background-image: url(${({ image }) => image});
    height: 12.813rem;
  }
  
  .textos {
    margin: 25px;
    height: auto;
    display: flex;
	  flex-direction: column;
	  justify-content: flex-start;
    color: ${Colors.colorTextResultsFounded};

    .titulo {
      color: ${Colors.colorTextTitleBlog};
      font-family: "Roboto", sans-serif;
      font-weight: 900;
      font-size: 1.313rem;
      line-height: 1.75rem;
      letter-spacing: -0.01em;
    }

    .description {
      padding-top: 0.5rem;
      color: ${Colors.colorTextDescriptionBlog};
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  .line {
    margin: 1.563rem;
    width: auto;
    height: 0px;
    border: 0.063rem solid ${Colors.colorLineSeparate};
  }

  .footer {
    margin: 1.563rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      span {
        padding-left: 0.438rem;
        color: ${Colors.colorTextDescriptionBlog};
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 0.875rem;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        opacity: 0.7;
      }
    }

    div:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        color: ${Colors.colorTextDescriptionBlog};
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 0.875rem;
        text-align: center;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        opacity: 0.7;
      }
    }
  }
`;