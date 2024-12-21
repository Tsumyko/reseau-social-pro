import api from './api';

export interface PostData {
  title: string;
  content: string;
  category: 'news' | 'event' | 'offer' | 'other';
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };
}

export const createPost = async (data: PostData) => {
  const response = await api.post('/posts', data);
  return response.data;
};

export const getPosts = async (params?: {
  category?: string;
  lat?: number;
  lng?: number;
  radius?: number;
}) => {
  const response = await api.get('/posts', { params });
  return response.data;
};

export const updatePost = async (id: string, data: Partial<PostData>) => {
  const response = await api.put(`/posts/${id}`, data);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};