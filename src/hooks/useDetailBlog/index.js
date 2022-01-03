import React from 'react';
import { useAtom } from 'jotai';
import { selectedBlogAtom } from '../../atoms/blog';

const useDetailBlog = () => {
  const [ selectedBlog, ] = useAtom(selectedBlogAtom);

  return [
    selectedBlog
  ];
}

export default useDetailBlog;
