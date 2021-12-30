import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  /* margin-left: 0.5rem; */
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button, div {
    top: 0;
    right: 0;
    width: ${({ width }) => `${width}rem`};
    height: 2.625rem;
    border-radius: 6px;
    background: ${Colors.backgroundColorButton};
    color: ${Colors.white};
    z-index: 1;
    cursor: pointer;
    border: 0;
    padding: 0.563rem 0.563rem;
    margin: 0.563rem 0.563rem;

    &:hover {
      background: ${Colors.colorTextLinkNormal};
    }
  }
`;