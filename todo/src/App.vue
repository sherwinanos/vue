<template>
  <div id="app">
    <!-- Header -->
    <img src="./assets/logo.png" class="logo" />

    <!-- Navigation -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/remove">Remove</router-link> |
      <router-link to="/update">Update</router-link>
    </div>

    <!-- Body -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
