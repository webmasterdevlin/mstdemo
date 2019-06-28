import axios from "axios";
import { BaseUrl } from "./api-config";

export async function getTodos() {
  return await axios.get(BaseUrl.todos);
}

export async function postTodo(newTodo) {
  return await axios.post(BaseUrl.todos, newTodo);
}

export async function putTodo(todo) {
  return await axios.put(`${BaseUrl.todos}${todo.id}`, todo);
}

export async function deleteTodo(todo) {
  return await axios.delete(`${BaseUrl.todos}${todo.id}`);
}
