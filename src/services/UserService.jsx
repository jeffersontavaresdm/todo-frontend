import {API, apiConfig} from "../apiConfig";

class UserService {

  async list() {
    const result = await API.get("/v1/user/list")
    return result.data
  }

  async signup(data) {
    let response = await API
      .post("/api/user/signup", data)
      .catch(error => error.response.status);

    return response.data
  }

  async signin(email, password) {
    const data = {
      email: email,
      password: password,
    }

    return await API
      // .post("http://localhost:3200/login", data)
      .post(`${apiConfig}`, data)
      .catch(error => error.response.status);
  }
}

export default new UserService();