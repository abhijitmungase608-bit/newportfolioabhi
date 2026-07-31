import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    const response = await axios.get(`${API_URL}${endpoint}`);
    return response.data;
  },
  
  post: async <T>(endpoint: string, data: any): Promise<T> => {
    const response = await axios.post(`${API_URL}${endpoint}`, data);
    return response.data;
  },
  
  put: async <T>(endpoint: string, data: any): Promise<T> => {
    const response = await axios.put(`${API_URL}${endpoint}`, data);
    return response.data;
  },
  
  delete: async <T>(endpoint: string): Promise<T> => {
    const response = await axios.delete(`${API_URL}${endpoint}`);
    return response.data;
  }
};