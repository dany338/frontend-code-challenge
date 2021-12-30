import React from 'react';
import { useAtom } from 'jotai';
import colorPrice from '../../utils/colorPrice';
import formatDate from '../../utils/formatDate';
import { blogsAtom } from '../../atoms/blog';

const useFormBlog = (values) => {
  const [blogs, ] = useAtom(blogsAtom);

  const createBlog = () => {
    const today = new Date();
    const newValues = {
      ...values,
      colorPrice: colorPrice(values.price),
      favorite: false,
      published: formatDate(today),
      id: blogs.length,
    };
    console.log('createBlog', values, newValues);
  };

  const updateBlog = () => {
    const newValues = {
      ...values,
      colorPrice: colorPrice(values.price),
    };
    console.log('updateBlog', values, newValues);
  };

  return [
    createBlog,
    updateBlog
  ];
}

export default useFormBlog;
