<template>
  <div class="todo-item">
    <div class="todo-item--text">
      <div>
        <input type="checkbox" v-model="completed" />
      </div>
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="todo-item--status">
      <div class="status" :class="{completed : todo.completed}">
        <span class="is-done">Done</span>
        <span class="is-pending">Pending</span>
      </div>
      <div class="buttons">
        <div class="btn-remove" @click="removeTodo(index)">&times;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item-all",
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
  // mutate props
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      description: this.todo.description,
      completed: this.todo.completed
    };
  },
  methods: {
    removeTodo(index) {
      this.$emit("removedTodo", index);
    }
  }
};
</script>