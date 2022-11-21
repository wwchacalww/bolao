import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { api } from "../services/api-client";
import { useNavigate } from "react-router-dom";

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  email: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: User;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut(broadCast: boolean = true) {
  const navigate = useNavigate();

  destroyCookie(undefined, "hakuna.token");
  destroyCookie(undefined, "hakuna.refresh_token");

  if (broadCast) {
    authChannel.postMessage("signOut");
  }

  navigate("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut(false);
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { "hakuna.token": token } = parseCookies();

    if (token) {
      api
        .get("/users/me")
        .then((response) => {
          const { email } = response.data;

          setUser({ email });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("users/login", {
        email,
        password,
      });
      const { token, refresh_token } = response.data;

      setCookie(undefined, "hakuna.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setCookie(undefined, "hakuna.refresh_token", refresh_token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({
        email,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      navigate("/games");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
