import {API} from "./apiConfig";

const interceptors = (token) => {
  return token;
}

API.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('@token')

    console.log(`token received: ${token}`)
  } catch (error) {
    console.error(error)
  }
})