<template>
  <div id="app">
    <!-- Header -->
    <img src="./assets/logo.png" class="logo" />

    <!-- Navigation -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
      <router-link to="/remove">Remove</router-link>
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
    background: #41b883;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: 8px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 8px 0;
    width: 80px;

    &.router-link-exact-active {
      background: #35495e;
      color: #fff;
    }
  }
}

.logo {
  height: 60px;
}
</style>
