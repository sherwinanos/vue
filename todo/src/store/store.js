import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "John Lennon",
        description: "Hey Jude, don't make it bad",
        completed: true,
      },
      {
        id: 2,
        title: "Paul McCartney",
        description: "When I find myself in times of trouble",
        completed: true,
      },
      {
        id: 3,
        title: "George Harrison",
        description: "It's been a hard day's night",
        completed: false,
      },
      {
        id: 4,
        title: "Ringgo Starr",
        description: "We all live in a yellow submarine",
        completed: false,
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
    updateTodo(state, id) {
      const index = state.todos.findIndex((item) => item.id == id);
      state.todos[index].completed = true;
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
    updateTodo(context, id) {
      setTimeout(() => {
        context.commit("updateTodo", id);
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
