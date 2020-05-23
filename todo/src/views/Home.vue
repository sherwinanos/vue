<template>
  <div id="home">
    <h1>Todo</h1>
    <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "Home",
  components: {
    Todo,
  },
};
</script>

<style lang="scss"></style>
