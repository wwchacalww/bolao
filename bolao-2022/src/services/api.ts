import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestQueue: any[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Authorization: `Bearer ${cookies["bolao.token"]}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    if (error.response?.status === 401) {
      if (error.response.data?.message === "jwt expired") {
        cookies = parseCookies();

        const { "bolao.refresh_token": refresh_token } = cookies;
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;
          api
            .post("/users/refresh", {
              refresh_token,
            })
            .then((response) => {
              const { token } = response.data;

              setCookie(undefined, "bolao.token", token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: "/",
              });

              setCookie(
                undefined,
                "bolao.refresh_token",
                response.data.refresh_token,
                {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                }
              );

              api.defaults.headers["Authorization"] = `Bearer ${token}`;

              console.log(failedRequestQueue.length);
              failedRequestQueue.forEach((request) => {
                request.onSuccess(token);
              });
              failedRequestQueue = [];
            })
            .catch((err) => {
              failedRequestQueue.forEach((request) => request.onFailure(err));
              failedRequestQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers = {
                Authorization: `Bearer ${token}`,
              };
              // const { method, baseURL, url, data, headers } = originalConfig;
              resolve(api(originalConfig));
            },
            onFailure: (err: any) => {
              reject(err);
            },
          });
        });
      } else {
        signOut();
      }
    }

    return Promise.reject(error);
  }
);
export { api };
