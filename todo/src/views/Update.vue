<template>
  <div>
    <h1>Update Items</h1>
    <!-- Todo Lists -->
    <div class="container">
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <div class="todo-item--text">
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
            <div class="btn-update" @click="updateTodo(todo.id)">&check;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.pendingTodos;
    }
  },
  methods: {
    updatedTodo(id) {
      this.$store.dispatch("updatedTodo", id);
    }
  }
};
</script>

<style lang="scss">
</style>
