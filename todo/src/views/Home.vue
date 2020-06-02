<template>
  <div>
    <h1>Todo Items</h1>
    <!-- Todo Lists -->
    <div class="container">
      <div
        class="todo-item"
        v-for="todo in todos"
        :key="todo.id"
        :class="{completed : todo.completed}"
      >
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
  computed: {
    todos() {
      return this.$store.getters.doneTodos;
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
  padding: 16px 8px;

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
