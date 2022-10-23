import axios from 'axios';
import { User } from '../interfaces/user.interface';
import { errorToast, successToast } from '../utils/toast';

const backendApi = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export const getUsers = async () => {
  try {
    const { data: users } = await backendApi.get('/users');
    return users.data;
  } catch (error) {
    errorToast('Error getting users');
  }
};

export const createUser = async (user: User) => {
  try {
    const { data } = await backendApi.post('/users', user);
    successToast(data.message);
    return data.data;
  } catch (error) {
    errorToast('Error creating user');
  }
};

export const updateUser = async (id: string, data: User) => {
  try {
    const { data: updatedUser } = await backendApi.put(`/users/${id}`, data);
    successToast(updatedUser.message);
    return updatedUser.data;
  } catch (error) {
    errorToast('Error updating user');
  }
  return;
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await backendApi.delete(`/users/${id}`);
    successToast(data.message);
  } catch (error) {
    errorToast('Error deleting user');
  }
};
