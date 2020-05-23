<template>
  <div class="todo-item">
    <div class="todo-item--text">
      <!-- <div>
        <input type="checkbox" v-model="todo.completed" />
      </div> -->
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="todo-item--btn">
      <div class="status">
        <div v-if="completed" class="is-done">Done</div>
        <div v-else class="is-pending">Pending</div>
      </div>
      <button
        v-if="completed"
        class="btn-primary btn-remove"
        @click="removeTodo(index)"
      >
        Remove
      </button>
      <button v-else class="btn-primary btn-remove">
        Update
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
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      description: this.todo.description,
      completed: this.todo.completed,
    };
  },
  methods: {
    removeTodo(index) {
      this.$emit("removedTodo", index);
    },
  },
};
</script>
