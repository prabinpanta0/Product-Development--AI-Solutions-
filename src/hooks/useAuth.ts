import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  isAuthenticated: false,
  login: (username: string, password: string) => {
    // Simple authentication for demo
    if (username === 'admin' && password === 'admin123') {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));