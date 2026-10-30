import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as SecureStore from 'expo-secure-store';
import { api, TOKEN_KEY, USER_KEY } from '../api/client';
import { AuthResponse } from '../types/auth';

type AuthContextType = {
  token: string | null;
  username: string | null;
  isLoading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signUp: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const storedToken = await SecureStore.getItemAsync(TOKEN_KEY);
        const storedUsername = await SecureStore.getItemAsync(USER_KEY);

        setToken(storedToken);
        setUsername(storedUsername);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const persistSession = async (data: AuthResponse) => {
    await SecureStore.setItemAsync(TOKEN_KEY, data.token);
    await SecureStore.setItemAsync(USER_KEY, data.username);
    setToken(data.token);
    setUsername(data.username);
  };

  const signIn = async (user: string, password: string) => {
    const { data } = await api.post<AuthResponse>('/auth/login', {
      username: user,
      password,
    });
    await persistSession(data);
  };

  const signUp = async (user: string, password: string) => {
    const { data } = await api.post<AuthResponse>('/auth/signup', {
      username: user,
      password,
    });
    await persistSession(data);
  };

  const signOut = useCallback(async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(USER_KEY);
    setToken(null);
    setUsername(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, username, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
