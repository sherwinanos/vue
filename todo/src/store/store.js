import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "PUBG",
        description: "The description status is false",
        completed: false,
      },
      {
        id: 2,
        title: "Mobile Legends",
        description: "The description status  is true",
        completed: true,
      },
      {
        id: 3,
        title: "DOTA 2",
        description: "The description status  is false",
        completed: false,
      },
      {
        id: 4,
        title: "AOV",
        description: "The description status  is true",
        completed: true,
      },
    ],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: false,
      });
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex((item) => item.id == id);
      state.todos.splice(index, 1);
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex((item) => item.id == todo.id);
      state.todos.splice(index, 1, {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
      });
    },
  },
  actions: {
    addTodo(context, todo) {
      setTimeout(() => {
        context.commit("addTodo", todo);
      }, 100);
    },
    deleteTodo(context, id) {
      setTimeout(() => {
        context.commit("deleteTodo", id);
      }, 100);
    },
    updateTodo(context, todo) {
      setTimeout(() => {
        context.commit("updateTodo", todo);
      }, 100);
    },
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    },
    pendingTodos(state) {
      return state.todos.filter((todo) => !todo.completed);
    },
  },
});
