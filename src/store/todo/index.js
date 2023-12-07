export default {
  state: {
    todoList: [],
  },
  mutations: {
    setTodoList: (state, data) => {
      state.todoList = data;
    },
    addTodoList: (state, data) => {
      state.todoList.push(data);
    },
    updateTodo: (state, data) => {
      state.todoList  = state.todoList.map(todo => {
        if (todo.id === data.id) {
          return data;
        }
        return todo;
      });
    },
    deleteTodoById(state, data) {
      state.todoList = state.todoList.filter((toDo) => toDo.id !== data);
    },
  },
  actions: {
    setTodoList: async (context, data) => {
      context.commit("setTodoList", data);
    },
    addTodoList: async (context, data) => {
      context.commit("addTodoList", data);
    },
    updateTodo: async (context, data) => {
      context.commit("updateTodo", data);
    },
    deleteTodoById: async (context, data) => {
      context.commit("deleteTodoById", data);
    }
  }
}
