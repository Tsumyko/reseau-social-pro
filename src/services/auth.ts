import api from './api';

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData extends LoginData {
  companyName: string;
  activity: string;
}

export const login = async (data: LoginData) => {
  const response = await api.post('/auth/login', data);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const signup = async (data: SignupData) => {
  const response = await api.post('/auth/signup', data);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};