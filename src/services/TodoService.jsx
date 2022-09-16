import {API} from "../api";

class TodoService {

  async list() {
    return API.get("/api/todo/list")
  }

  async create(name: string) {
    return API.post("/api/todo/create", {name: name})
  }
}

export default new TodoService()