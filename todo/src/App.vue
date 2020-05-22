<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    <h1>Todo</h1>
    <todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

body {
  font-size: 16px;
}

.logo {
  height: 60px;
}

.container {
  //border: 1px dashed #f3f3f3;
  margin: 0 auto 32px;
  max-width: 620px;
}

input[type="text"] {
  font-size: 16px;
  margin: 0 0 16px;
  padding: 12px 16px;
  width: 586px;

  &:focus {
    outline: none;
  }
}

.btn-primary {
  background: #41b883;
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.btn-submit {
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 16px;
  text-transform: uppercase;
  width: 200px;
}

.btn-update,
.btn-remove {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 8px 12px;
}
</style>
