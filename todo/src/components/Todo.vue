<template>
  <div>
    <!-- Todo Input -->
    <section class="container form-wrap">
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
    </section>

    <!-- Todo Lists -->
    <section class="container todo-listings">
      <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :class="{ isCompleted: todo.completed }"
        :todo="todo"
        :index="index"
      >
        <!-- <div class="todo-item--text">
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
        </div> -->
      </todo-item>
    </section>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "todo",
  component: {
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
<style lang="scss" scoped>
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

  .is-done {
    display: none;
    font-size: 14px;
    font-style: italic;
    padding: 0 18px;
    text-transform: uppercase;
  }

  &.isCompleted {
    background: #35495e;
    color: #fff;

    .is-done {
      display: block;
    }

    .btn-remove {
      display: none;
    }
  }
}
</style>
