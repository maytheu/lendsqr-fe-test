import http from "./http";
import { User } from "./interfaces";

class UserService {
  getUsers() {
    return http.get<User[]>("/users");
  }

  getUser(id: string) {
    return http.get<User>(`/users/${id}`);
  }
}

export default new UserService();
