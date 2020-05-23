<template>
  <div>
    <TodoAll class="container todo-list" :todo="todo" />
  </div>
</template>

<script>
import TodoAll from "@/components/TodoAll.vue";

export default {
  name: "todo",
  components: {
    TodoAll,
  },
  data() {
    return {
      newTodoTitle: "",
      newTodoDesc: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "One",
          description: "This is false",
          completed: false,
        },
        {
          id: 2,
          title: "Two",
          description: "This is true",
          completed: true,
        },
      ],
    };
  },
  methods: {},
};
</script>
