import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  width: 35.688rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 960px) {
    width: 35.688rem;
  }

  @media screen and (max-width: 880px) {
    width: 35.688rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 3.125rem;
  }

  @media screen and (max-width: 260px) {
    width: 100%;
    height: 3.125rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${Colors.colorBorderButtonLoadMore};
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0rem 1rem;
  z-index: 1;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 1.063rem;
    line-height: 1.625rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${Colors.backgroundColorButton};
  }

  svg {
    position: absolute;
    vertical-align: middle;
    right: 0;
    width: 0.75rem;
    height: 0.75rem;
    fill: ${Colors.backgroundColorButton};
    margin: 0rem 0.75rem;

    &:hover {
      fill: ${Colors.colorTextLinkNormal} !important;
    }
  }

  &:hover {
    border: 1px solid ${Colors.colorTextLinkNormal};
    transition: all 0.3s ease-in-out;

    > span {
      color: ${Colors.colorTextLinkNormal};
    }

    > svg {
      fill: ${Colors.colorTextLinkNormal} !important;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;