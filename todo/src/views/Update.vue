<template>
  <div>
    <h1>Update Items</h1>
    <!-- Todo Lists -->
    <div class="container">
      <div class="todo-item" v-for="todo in todoPending" :key="todo.id">
        <div class="todo-item--text">
          <div>
            <input type="checkbox" v-model="completed" />
          </div>
          <div>
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.description }}</p>
          </div>
        </div>

        <div class="todo-item--status">
          <div class="status" :class="{completed : todo.completed}">
            <span class="is-done">Done</span>
            <span class="is-pending">Pending</span>
          </div>
          <div class="buttons">
            <div class="btn-update">&check;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      heading: "Todo Items",
      newTodoTitle: "",
      newTodoDesc: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "One",
          description: "This is false",
          completed: false
        },
        {
          id: 2,
          title: "Two",
          description: "This is true",
          completed: true
        },
        {
          id: 3,
          title: "Three",
          description: "This is false",
          completed: false
        },
        {
          id: 4,
          title: "Four",
          description: "This is true",
          completed: true
        }
      ]
    };
  },
  computed: {
    todoPending() {
      return this.todos.filter(todo => !todo.completed);
    }
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
