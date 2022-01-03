import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Overlay,
  Container,
  Header,
  ButtonClose,
} from './styled';

const Modal = ({
  children,
  state,
  changeState,
  title,
  showHeader,
  showOverlay,
  positionModal,
  padding
}) => (
  <>
    {state && (
      <Overlay showOverlay={showOverlay} positionModal={positionModal}>
        <Container padding={padding}>
          {showHeader && (
            <Header>
              <h3>{title}</h3>
            </Header>
          )}
          <ButtonClose onClick={() => changeState(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </ButtonClose>
          {children}
        </Container>
      </Overlay>
    )}
  </>
)

export default Modal;
// {/* ReactDOM.createPortal(, document.getElementById('portal')) <ModalSign /> */}

function ModalPortal({ children }) {
  const portalNode = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      document.body.removeChild(portalNode);
    };
  }, [portalNode]);

  return ReactDOM.createPortal(children, portalNode);
}