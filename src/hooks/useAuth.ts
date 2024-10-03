import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@utils/api';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('authToken');
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('authToken', token);
      setIsAuthenticated(true);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Falha no login. Verifique suas credenciais e tente novamente.');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};