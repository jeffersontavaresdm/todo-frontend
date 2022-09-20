import axios from "axios";

export const api = {
  appUrl: "http://localhost:3000",
  apiUrl: "http://localhost:3200"
}

export const API = axios.create({baseURL: `${api.apiUrl}`});

API.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('@token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  } catch (error) {
    console.error(error)
  }
})