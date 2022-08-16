import {API} from "../api";

class UserService {

  async list() {
    const result = await API.get("/api/user/list")
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
      .post("/login", data)
      .catch(error => error.response.status);
  }
}

export default new UserService();