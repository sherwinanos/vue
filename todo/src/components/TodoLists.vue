<template>
  <div>
    <!-- Todo Input -->
    <!-- <section class="container form-wrap">
      <input
        type="text"
        placeholder="Enter title here"
        class="input-title"
        v-model="newTodoTitle"
      />
      <input
        type="text"
        placeholder="Enter description here"
        class="input-desc"
        v-model="newTodoDesc"
      />
      <input
        type="submit"
        value="Add"
        class="btn-primary btn-submit"
        @click="addTodo(index)"
      />
    </section> -->

    <!-- Todo Lists -->
    <section class="container todo-listings">
      <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :class="{ isCompleted: todo.completed }"
        :todo="todo"
        :index="index"
        @removedTodo="removeTodo"
      />
    </section>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "todo-lists",
  components: {
    TodoItem,
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
        completed: false,
      });

      this.newTodoTitle = "";
      this.newTodoDesc = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.form-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.todo-item {
  background: #f3f3f3;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px;
  text-align: left;

  .todo-item--text {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    > div {
      margin-right: 16px;
    }
  }

  .todo-item--btn {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .status {
    font-size: 12px;
    font-style: italic;
    text-transform: lowercase;

    .is-pending {
      color: red;
    }
  }

  &.isCompleted {
    background: #35495e;
    color: #fff;
  }
}
</style>
