import axios from "axios";
import axiosRetry from "axios-retry";

export interface AppConfiguration {
  appUrl: string;
  apiUrl: string;
}

const Config: AppConfiguration = {
  appUrl: "http://localhost:3000",
  apiUrl: "http://localhost:3200"
}

export const API = axios.create(
  {
    baseURL: `${Config.apiUrl}`
  }
);

export const RetryableAPI = axios.create(
  {
    baseURL: `${Config.apiUrl}`,
  }
);

const okHandler = () => (response: any) => response

const unauthorizedHandler = () => {
  return async (error: any) => {
    await new Promise(r => setTimeout(r, 500));

    if (error && 401 === error.response.status) {
      console.log("logging out user (401)...")

      // UserService.logout();

      window.location.href = `${Config.appUrl}/loggedOut`;
    }

    return Promise.reject(error);
  };
}


API.interceptors.response.use(okHandler(), unauthorizedHandler());
RetryableAPI.interceptors.response.use(okHandler(), unauthorizedHandler());

axiosRetry(RetryableAPI);

export default Config;