<template>
  <div>
    <h1>Add Items</h1>
    <!-- Todo Input -->
    <div class="container">
      <div class="todo-input">
        <input type="text" class="input-title" placeholder="Enter title" v-model="newTodoTitle" />
        <input
          type="text"
          class="input-description"
          placeholder="Enter description"
          v-model="newTodoDesc"
        />
        <button class="btn-primary" @click="addTodo">Add Item</button>
      </div>
    </div>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
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
  methods: {
    addTodo() {
      if (
        this.newTodoTitle.trim().length == 0 &&
        this.newTodoDesc.trim().length == 0
      ) {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodoTitle,
        description: this.newTodoDesc,
        completed: false
      });

      this.newTodoTitle = "";
      this.newTodoDesc = "";
      this.idForTodo++;
    }
  }
};
</script>

<style lang="scss">
</style>
