<template>
  <div>
    <h1>Add Items</h1>
    <TodoInput />

    <!-- Todo Lists -->
    <section class="container todo-listings">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
      />
    </section>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "Add",
  components: {
    TodoInput,
    TodoItem,
  },
};
</script>
