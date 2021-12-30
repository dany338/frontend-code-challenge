import Api from '../constants/api';

export const apiBlogs = {
  getAll: () => fetch(`${Api.urlBlogs}`)
  .then(res => res.json())
  .then(res => res.data)
};