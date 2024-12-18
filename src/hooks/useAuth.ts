import { create } from 'zustand';
import { User } from '../types';
import * as api from '../services/api';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean }>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean }>;
  logout: () => void;
  clearError: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });
      const { user, token } = await api.login(email, password);
      set({ user, token, isLoading: false });
      localStorage.setItem('token', token);
      return { success: true };
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Login failed', 
        isLoading: false 
      });
      return { success: false };
    }
  },
  register: async (email, password, name) => {
    try {
      set({ isLoading: true, error: null });
      const { user, token } = await api.register(email, password, name);
      set({ user, token, isLoading: false });
      localStorage.setItem('token', token);
      return { success: true };
    } catch (error: any) {
      set({ 
        error: error.response?.data?.message || 'Registration failed', 
        isLoading: false 
      });
      return { success: false };
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
  clearError: () => set({ error: null }),
}));