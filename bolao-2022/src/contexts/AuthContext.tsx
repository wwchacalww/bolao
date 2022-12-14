import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
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

export function signOut() {
  destroyCookie(undefined, "bolao.token");
  destroyCookie(undefined, "bolao.refresh_token");
  return redirect("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { "bolao.token": token } = parseCookies();
    if (token) {
      api
        .get("users/me")
        .then((response) => {
          const { email } = response.data;
          setUser({ email });
        })
        .catch(() => {
          destroyCookie(undefined, "bolao.token");
          destroyCookie(undefined, "bolao.refresh_token");
          navigate("/");
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
