<template>
  <div>
    <h1>Remove Items</h1>
    <!-- Todo Lists -->
    <div class="container">
      <transition-group
        name="fade"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <div
          class="todo-item"
          v-for="todo in todos"
          :key="todo.id"
          :class="{completed : todo.completed}"
        >
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
              <div class="btn-remove" @click="removeTodo(todo.id)">&times;</div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>

<style lang="scss">
</style>
