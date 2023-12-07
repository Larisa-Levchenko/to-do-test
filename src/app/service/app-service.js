"use strict";
import axios from "axios";
import store from "@/store";

const URL = "https://dummyjson.com";

export default new (class AppService {
  // Метод получения пользователей
  // return Array<Object>
  async getUsers() {
    try {
      const response = await axios.get(URL + "/users");
      return await response.data.users;
      
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Метод получения задач
  // return Array<Object>
  async getTodos() {
    try {
      const response = await axios.get(URL + "/todos");
      return await response.data.todos;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Метод записывает в стор данные необходимые ддля старта ПО
  async getStartData() {
    try {
      const users = await this.getUsers();
      await store.dispatch("setUserList", users);

      const todos = await this.getTodos();
      await store.dispatch("setTodoList", todos);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Создать новую задачу
  // todo - String, userId - Int
  // Добавляет в стор новую задачу
  async addTodo({ todo, userId }) {
    try {
      const response = await axios.post(URL + "/todos/add", {
        todo,
        userId,
        completed: false,
      });

      const data = await response.data;
      await store.dispatch("addTodoList", data);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Обновить статус задачи
  // todoId - Int, status - Boolean
  // Обновляет в сторе задачу
  async updateTodo({ todoId, status }) {
    try {
      const response = await axios.put(URL + `/todos/${todoId}`, {
        completed: status,
      });

      const data = await response.data;
      await store.dispatch("updateTodo", data)
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Удалить задачу
  // todoId - Int
  // Удаляет из стора задачу
  async deleteTodos({ todoId }) {
    try {
      await axios.delete(URL + `/todos/${todoId}`);
      await store.dispatch("deleteTodoById", todoId);
    } catch (e) {
      return Promise.reject(e);
    }
  }
})();
