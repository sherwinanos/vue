<template>
  <div class="todo-item completed">
    <div class="todo-item--text">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item-done",
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
  }
};
</script>