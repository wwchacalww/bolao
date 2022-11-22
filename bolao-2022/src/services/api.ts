import axios from "axios";
import { parseCookies, setCookie } from "nookies";

let cookies = parseCookies();

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
      if (error.response.data?.message === "Token expired") {
        cookies = parseCookies();

        const { "bolao.refresh_token": refresh_token } = cookies;

        api
          .post("/refresh", {
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
          });
      }
    }
  }
);
export { api };
