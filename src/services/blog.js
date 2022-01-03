import api from './api';
import { BLOGS } from '../constants/backend';

export const getAllBlogs = (query, page, limit, type) => new Promise( async (resolve, reject) => {
  try {
    const obj = type === 'Articles' ? { _page: page, _limit: limit, q: query } : { _page: page, _limit: limit, q: query, favorite: true};
    const objDefault = type === 'Articles' ? { _page: page, _limit: limit } : { _page: page, _limit: limit, favorite: true };
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

export const createBlog = data => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(BLOGS, data);
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const updateBlog = data => new Promise( async (resolve, reject) => {
  try {
    const response = await api.put(BLOGS, data);
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