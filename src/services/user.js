import api from './api';
import { USERS } from '../constants/backend';

export const getUserByCredentials = login => new Promise( async (resolve, reject) => {
  try {
    const params = login;
    const response = await api.get(USERS, { params });
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const createAccount = data => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(USERS, data);
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});