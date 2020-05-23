<template>
  <div>
    <section class="container todo-input">
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
  </div>
</template>

<script>
export default {
  name: "todo-input",
};
</script>
