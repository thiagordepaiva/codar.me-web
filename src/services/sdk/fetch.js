import axios from "axios";

const endpoints = {
  production: "http://api.puf.work",
  development: "http://dev.puf.work",
  staging: "http://stg.puf.work",
};

export const fetch = axios.create({
  baseURL:
    endpoints?.[process.env.REACT_APP_API_ENV] ||
    process.env.REACT_APP_CUSTOM_URL ||
    endpoints.production,
});
