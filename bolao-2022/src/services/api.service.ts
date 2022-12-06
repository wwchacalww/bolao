import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { env } from "../config/env";
import { signOut } from "../contexts/AuthContext";

let isRefreshing = false;
let failedRequestQueue: any[] = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: env.baseURL,
    headers: {
      Authorization: `Bearer ${cookies["hakuna.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.data?.code === "token.expired") {
          cookies = parseCookies(ctx);
          const { "hakuna.refreshToken": refresh_token } = cookies;
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post("/users/refresh", {
                refresh_token,
              })
              .then((response) => {
                const { token, refreshToken } = response.data;
                console.log("response da api.ts");

                setCookie(ctx, "hakuna.token", token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });
                setCookie(ctx, "hakuna.refreshToken", refreshToken, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });

                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                failedRequestQueue.forEach((request) =>
                  request.onSuccess(token)
                );
                failedRequestQueue = [];
              })
              .catch((err) => {
                failedRequestQueue.forEach((request) => request.onFailure(err));
                failedRequestQueue = [];

                if (typeof window === "undefined") {
                  console.log("browser aqui");
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;
                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (typeof window === "undefined") {
            signOut();
          } else {
            return Promise.reject(new Error("Invalid Token"));
          }
        }

        return Promise.reject(error);
      }
    }
  );

  return api;
}
