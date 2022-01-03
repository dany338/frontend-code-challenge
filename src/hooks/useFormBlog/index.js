import { useState } from 'react';
import { useAtom } from 'jotai';
import colorPrice from '../../utils/colorPrice';
import formatDate from '../../utils/formatDate';
import { blogsAtom } from '../../atoms/blog';

const useFormBlog = (values) => {
  const [blogs, ] = useAtom(blogsAtom);
  const [ isLoading, setIsLoading ] = useState(false);

  const createBlog = () => {
    setIsLoading(true);
    const today = new Date();
    const newValues = {
      ...values,
      colorPrice: colorPrice(values.price),
      favorite: false,
      published: formatDate(today),
      id: blogs.length,
    };
    console.log('createBlog', values, newValues);
    setIsLoading(false);
  };

  const updateBlog = () => {
    setIsLoading(true);
    const newValues = {
      ...values,
      colorPrice: colorPrice(values.price),
    };
    console.log('updateBlog', values, newValues);
    setIsLoading(false);
  };

  return [
    createBlog,
    updateBlog,
    isLoading
  ];
}

export default useFormBlog;
