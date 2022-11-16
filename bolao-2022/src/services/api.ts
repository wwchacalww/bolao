import axios from "axios";

const api = axios.create({
  baseURL: "https://api.chacal.dev/",
});

export { api };
