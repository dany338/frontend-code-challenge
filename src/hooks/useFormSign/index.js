import React from 'react';
import { useAtom } from 'jotai';
import colorPrice from '../../utils/colorPrice';
import formatDate from '../../utils/formatDate';
import { blogsAtom } from '../../atoms/blog';

const useFormBlog = (values) => {
  const [blogs, ] = useAtom(blogsAtom);

  const createUser = () => {
    console.log('createUser', values);
  };

  const loginUser = () => {
    console.log('loginUser', values);
  };

  return [
    createUser,
    loginUser
  ];
}

export default useFormBlog;
