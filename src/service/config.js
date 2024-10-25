import axios from "axios";
import { turnOffLoading, turnOnLoading } from "../redux/reducers/spinnerSlice";
import store from "../redux/store/store";

export let http = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MTkxMDQwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQyMDU4MDAwfQ.aL6UU86iw9qfiazPYi9hHV3FjYthitqZbK5pBfChSiU",
    Authorization:
      "bearer " + JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken,
  },
});

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    store.dispatch(turnOnLoading());
    // Do something before request is sent
    return config;
  },
  function (error) {
    store.dispatch(turnOffLoading());
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    store.dispatch(turnOffLoading());
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(turnOffLoading());
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
