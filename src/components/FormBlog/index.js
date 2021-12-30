import React, { lazy } from 'react';
import { useAtom } from 'jotai';
import useModalSign from '../../hooks/useValidation';
import useFormBlog from '../../hooks/useFormBlog';
import { validateBlog } from '../../utils/validations';
import { Container } from './styled';
import ImageBlog from '../../assets/images/not-found.png';
import { selectedBlogAtom } from '../../atoms/blog';

const Modal = lazy(() => import('../Modal'));
const TextField = lazy(() => import('../TextField'));
const TextButton = lazy(() => import('../TextButton'));

const initialState = {
  title: '',
  description: '',
  content: '',
  image: '',
  price: '',
};

const extractSelectedBlog = obj => {
  const {
    title = '',
    description = '',
    content = '',
    image = '',
    price = '',
  } = obj;
  return {
    title,
    description,
    content,
    image,
    price,
  };
};

const FormBlog = ({
  state,
  changeState,
  title,
  showHeader,
  showOverlay,
  positionModal,
  padding
}) => {
  const [selectedBlog, ] = useAtom(selectedBlogAtom);

  const [
    errors,
    values,
    handleChange,
    handleSubmit
  ] = useModalSign(selectedBlog ? extractSelectedBlog(selectedBlog) : initialState, validateBlog, () => selectedBlog ? updateBlog() : createBlog());

  const [
    createBlog,
    updateBlog
  ] = useFormBlog(values);

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
      <Container image={ImageBlog}>
        <div className="image" />
        <div className="form">
          <span className="title">{selectedBlog ? 'Update' : 'Create'} Blog</span>
          <span className="description">Info. Blog</span>
          <form onSubmit={handleSubmit} noValidate={true}>
            <TextField type="text" typeInput={'text'} name="title" placeholder="Blog Title" value={values.title} onChange={handleChange} errors={(errors.title && errors.title !== '') && (errors.title)} />
            <TextField type="text" typeInput={'text'} name="description" placeholder="Blog Description" value={values.description} onChange={handleChange} errors={(errors.description && errors.description !== '') && (errors.description)} />
            <TextField type="text" typeInput={'textarea'} name="content" placeholder="Blog Content" value={values.content} onChange={handleChange} errors={(errors.content && errors.content !== '') && (errors.content)} />
            <TextField type="text" typeInput={'text'} name="image" placeholder="Blog Image" value={values.image} onChange={handleChange} errors={(errors.image && errors.image !== '') && (errors.image)} />
            <TextField type="text" typeInput={'text'} name="price" placeholder="Blog Price" value={values.price} onChange={handleChange} errors={(errors.price && errors.price !== '') && (errors.price)} />
            <TextButton width="18.438" text="Save Blog" type={'submit'} />
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default FormBlog;
