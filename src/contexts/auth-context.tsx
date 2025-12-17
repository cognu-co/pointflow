import { createContext, useCallback, useContext, useState } from "react";

import { UserType } from "@/interfaces/i-users";

type AuthorizationState = {
  user: UserType | null;
  token: string;
};

type SignInCredentials = {
  username: string;
  password: string;
};

type AuthContextData = {
  isAuthenticated: boolean;
  user: UserType | null;
  signIn: (data: SignInCredentials) => Promise<string | null>;
  signOut: () => void;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState({} as AuthorizationState);
  const isAuthenticated = !!data?.user;

  async function signIn({ username, password }: SignInCredentials) {
    console.log({ username, password });

    return null;
  }

  const signOut = useCallback(() => {
    try {
      console.log("SignOut");
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
