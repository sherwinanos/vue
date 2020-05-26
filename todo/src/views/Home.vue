<template>
  <div>
    <h1>Todo Items</h1>
    <!-- Todo Lists -->
    <div class="container">
      <div class="todo-item" v-for="todo in todoDone" :key="todo.id" :todo="todo" :index="index">
        <div class="todo-item--text">
          <div>
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      heading: "Todo Items",
      newTodoTitle: "",
      newTodoDesc: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "One",
          description: "This is false",
          completed: false
        },
        {
          id: 2,
          title: "Two",
          description: "This is true",
          completed: true
        },
        {
          id: 3,
          title: "Three",
          description: "This is false",
          completed: false
        },
        {
          id: 4,
          title: "Four",
          description: "This is true",
          completed: true
        }
      ]
    };
  },
  computed: {
    todoDone() {
      return this.todos.filter(todo => todo.completed);
    }
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.todo-input {
  align-items: start;
  display: flex;
  flex-direction: column;
}

.todo-item {
  align-items: center;
  background: #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 16px;
  padding: 16px 0;

  .todo-item--text {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    > div {
      margin: 0 8px;
      text-align: left;
    }
  }

  .todo-item--status {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    > div {
      margin: 0 16px 0 0px;
      text-align: left;
    }

    .status {
      color: #666;
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;

      .is-done {
        display: none;
      }

      &.completed {
        .is-done {
          display: block;
        }
        .is-pending {
          display: none;
        }
      }
    }
  }

  &.completed {
    background: #f0f0f0;
  }
}
</style>
