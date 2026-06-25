import axios from 'axios';

const authApiInstance = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
baseURL: "http://localhost:3000/api/auth",
withCredentials: true,
});  

export async function register({  email, password, contact, fullName, isSeller}) {
  try {
    const response = await authApiInstance.post('/register', {
      email,
      password,
      contact,
      fullName,
      isSeller
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function login({ email, password }) {
  try {
    const response = await authApiInstance.post('/login', {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}