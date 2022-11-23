import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

type User = {
  email: string;
} | null;

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user?: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { "bolao.token": token } = parseCookies();
    if (token) {
      api
        .get("users/me")
        .then((response) => {
          if (response) {
            const { email } = response.data;
            setUser({ email });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("users/login", {
        email,
        password,
      });

      const { token, refresh_token } = response.data;

      setCookie(undefined, "bolao.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setCookie(undefined, "bolao.refresh_token", refresh_token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({ email });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      navigate("/games");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
