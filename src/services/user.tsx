import { AxiosResponse } from 'axios';
import apiClient from '@/utils/apiClient';
import { IUser, IUserSignUp, IUserLogin } from '@/interfaces/user';

export const createUser = async (user: IUserSignUp): Promise<AxiosResponse<IUser>> =>
  apiClient.post('/users/signup', user);

export const getUserById = async (id: number): Promise<AxiosResponse<IUser>> =>
  apiClient.get(`/users/${id}`);

export const login = async (user: IUserLogin) => apiClient.post('/users/login', user);
