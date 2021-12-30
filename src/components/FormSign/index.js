import React, { useState, useEffect, lazy } from 'react';
import useModalSign from '../../hooks/useValidation';
import useFormSign from '../../hooks/useFormSign';
import { validateSignIn, validateSignUp } from '../../utils/validations';
import { Container } from './styled';
import ImageSign from '../../assets/images/image-sign.png';

const Modal = lazy(() => import('../Modal'));
const TextField = lazy(() => import('../TextField'));
const TextButton = lazy(() => import('../TextButton'));

const initialState = {
  email: '',
  fullname: '',
  password: '',
};

const loginState = {
  email: '',
  password: '',
};

const FormSign = ({
  state,
  changeState,
  title,
  showHeader,
  showOverlay,
  positionModal,
  padding
}) => {
  const [changeFormSignUp, setChangeFormSignUp] = useState(false);

  const [
    errors,
    values,
    handleChange,
    handleSubmit
  ] = useModalSign(changeFormSignUp ? initialState: loginState, changeFormSignUp ? validateSignUp : validateSignIn, () => changeFormSignUp ? createUser() : loginUser());

  const [
    createUser,
    loginUser
  ] = useFormSign(values);

  const handleChangeSignForm = e => {
    e.preventDefault();
    setChangeFormSignUp(!changeFormSignUp);
    e.stopPropagation();
  };

  return (
    <Modal
      state={state}
      changeState={changeState}
      title={title}
      showHeader={showHeader}
      showOverlay={showOverlay}
      positionModal={positionModal}
      padding={padding}
    >
      <Container image={ImageSign}>
        <div className="image" />
        <div className="form">
          <span className="title">{changeFormSignUp ? 'Sign Up' : 'Sign In'}</span>
          <span className="description">Simplify your reading in minutes.</span>
          <form onSubmit={handleSubmit} noValidate={true}>
            <TextField type="email" typeInput={'text'} name="email" placeholder="Your email" value={values.email} onChange={handleChange} errors={(errors.email && errors.email !== '') && (errors.email)} />
            {changeFormSignUp && (
              <TextField type="text" typeInput={'text'} name="fullname" placeholder="Full Name" value={values.fullname} onChange={handleChange} errors={(errors.fullname && errors.fullname !== '') && (errors.fullname)} />
            )}
            <TextField type="password" typeInput={'text'} name="password" placeholder="Password" value={values.password} onChange={handleChange} errors={(errors.password && errors.password !== '') && (errors.password)} />
            <div className="link">
              <span onClick={e => handleChangeSignForm(e)}>{changeFormSignUp ? 'Sign In' : 'Sign Up'}</span>
            </div>
            <TextButton width="18.438" text={changeFormSignUp ? 'Sign Up' : 'Sign In'} type={'submit'} />
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default FormSign;
