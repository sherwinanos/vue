<template>
  <div>
    <h1>Add Item</h1>
    <div class="container">
      <input type="text" placeholder="Enter title..." class="input-title" v-model="newTitle" />
      <input type="text" placeholder="Enter description..." class="input-desc" v-model="newDesc" />
      <input type="submit" value="Add" class="btn-primary" @click="addTodo" />
    </div>

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
  name: "Add",
  data() {
    return {
      newTodo: "",
      newDesc: "",
      newId: 5
    };
  },
  computed: {
    todos() {
      return this.$store.getters.pendingTodos;
    }
  },
  methods: {
    addTodo() {
      if (this.newTitle.trim().length == 0 && this.newDesc.trim().length == 0) {
        return;
      }

      this.$store.commit("addTodo", {
        id: this.newId,
        title: this.newTitle,
        description: this.newDesc
      });

      this.newTitle = "";
      this.newDesc = "";
      this.newId++;
    }
  }
};
</script>

<style lang="scss">
</style>
