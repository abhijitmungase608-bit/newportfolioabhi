import { api } from './api';

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export const contactService = {
  submit: async (data: ContactData) => {
    return api.post('/api/contact', data);
  },
  
  getAll: async () => {
    return api.get('/api/contact');
  },
  
  updateStatus: async (id: string, status: string) => {
    return api.put(`/api/contact/${id}`, { status });
  }
};