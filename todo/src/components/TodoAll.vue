<template>
  <div>
    <div class="todo-item" v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoAll",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
