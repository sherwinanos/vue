<template>
  <div class="todo-item">
    <div class="todo-item--text">
      <div>
        <input type="checkbox" v-model="todo.completed" />
      </div>
      <div>
        <h2>{{ todo.title }}</h2>
        <p>{{ todo.description }}</p>
      </div>
    </div>
    <div class="todo-item--btn">
      <div class="is-done">Done</div>
      <button class="btn-primary btn-remove" @click="removeTodo(index)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
