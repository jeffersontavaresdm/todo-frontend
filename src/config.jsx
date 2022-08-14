import axios from "axios";

export interface AppConfiguration {
  appUrl: string;
  apiUrl: string;
}

export const Config: AppConfiguration = {
  // appUrl: "https://abykyjefferson.tunnelto.dev",
  appUrl: "http://localhost:3000",
  apiUrl: "http://localhost:3200"
}

export const API = axios.create({baseURL: `${Config.apiUrl}`});