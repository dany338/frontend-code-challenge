import api from './api';
import { BLOGS } from '../constants/backend';

export const getAllBlogs = (query, page, limit, type) => new Promise( async (resolve, reject) => {
  try {
    const obj = type === 'Articles' ? { _page: page, _limit: limit, _sort: 'id', _order: 'desc', q: query } : { _page: page, _limit: limit, _sort: 'id', _order: 'desc', q: query, favorite: true};
    const objDefault = type === 'Articles' ? { _page: page, _limit: limit, _sort: 'id', _order: 'desc' } : { _page: page, _limit: limit, _sort: 'id', _order: 'desc', favorite: true };
    const params = query !== '' ? obj : objDefault;
    const response = await api.get(BLOGS, { params });
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const getBlogById = id => new Promise( async (resolve, reject) => {
  try {
    const response = await api.get(`${BLOGS}/${id}`);
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const fetchCreateBlog = data => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(BLOGS, data);
    if (response.status === 201) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const fetchUpdateBlog = data => new Promise( async (resolve, reject) => {
  try {
    const response = await api.put(`${BLOGS}/${data.id}`, data);
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const fetchDeleteBlog = data => new Promise( async (resolve, reject) => {
  try {
    const response = await api.delete(`${BLOGS}/${data.id}`);
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const updateFavoriteBlog = (id, favorite) => new Promise( async (resolve, reject) => {
  try {
    const response = await api.patch(`${BLOGS}/${id}`, { favorite });
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});