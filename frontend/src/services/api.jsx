import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
});

export const registerUser = async (data) => {
  try {
    const response = await api.post('/register', data);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    throw error;
  }
};

// Existing functions for login and protected data
export const loginUser = async (data) => {
  try {
    const response = await api.post('/login', data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};

export const fetchProtectedData = async (token) => {
  try {
    const response = await api.get('/protected', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch protected data error:', error.response?.data || error.message);
    throw error;
  }
};
