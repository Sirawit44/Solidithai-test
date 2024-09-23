import axios from '../config/axios';

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const authAPI = {
  register: (body: RegisterData) => axios.post('/auth/register', body),
  login: (body: LoginData) => axios.post('/auth/login', body),
  getAuthUser: () => axios.get<AuthUser>('/auth/me'),
};

export default authAPI;
