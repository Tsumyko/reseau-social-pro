import api from './api';

export const getPosts = async (category?: string) => {
  const params = category ? { category } : {};
  const response = await api.get('/posts', { params });
  return response.data;
};

export const createPost = async (data: {
  content: string;
  category: 'actualité' | 'offre' | 'événement' | 'autre';
  images?: string[];
}) => {
  const response = await api.post('/posts', data);
  return response.data;
};

export const likePost = async (postId: string) => {
  const response = await api.post(`/posts/${postId}/like`);
  return response.data;
};

export const commentPost = async (postId: string, content: string) => {
  const response = await api.post(`/posts/${postId}/comment`, { content });
  return response.data;
};