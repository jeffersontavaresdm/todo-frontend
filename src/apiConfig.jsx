import axios from "axios";

export interface AppConfig {
  appUrl: string,
  apiUrl: string
}

export const apiConfig: AppConfig = {
  appUrl: "http://localhost:3000",
  apiUrl: "http://localhost:3200"
}

export const API = axios.create({baseURL: `${apiConfig.apiUrl}`});