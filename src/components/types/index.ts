export const APP_CONFIG = {
  name: 'Abhijit Mungase Portfolio',
  version: '1.0.0',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  email: 'your@email.com',
  phone: '+91 98765 43210',
  location: 'Maharashtra, India'
};

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  work: '/work',
  contact: '/contact'
};

export const SERVICES_LIST = [
  { value: 'mobile-app', label: 'Mobile App Development' },
  { value: 'startup-mvp', label: 'Startup & MVP Development' },
  { value: 'custom-software', label: 'Custom Software Solutions' },
  { value: 'other', label: 'Other' }
];

export const BUDGET_RANGES = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k+', label: '$100,000+' }
];