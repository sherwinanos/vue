<template>
  <div id="app">
    <!-- Header -->
    <img src="./assets/logo.png" class="logo" />

    <!-- Navigation -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
      <!-- 
      <router-link to="/remove">Remove</router-link>
      <router-link to="/update">Update</router-link>-->
    </div>

    <!-- Body -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  height: 64px;
  margin-top: 24px;
}

#nav {
  padding: 24px;

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

.container {
  margin: 0 auto 24px;
  width: 620px;
}

h2 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

input[type="text"] {
  border: 1px solid #999;
  font-size: 16px;
  margin: 0 0 8px;
  padding: 8px 16px;
  width: 586px;

  &:focus {
    border-color: #41b883;
    outline: none;
  }
}

.btn-primary {
  background: #41b883;
  border: 0;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 8px 24px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
}

.btn-remove,
.btn-update {
  color: white;
  cursor: pointer;
  border-radius: 50%;
  display: block;
  font-size: 24px;
  font-weight: bold;
  height: 32px;
  text-align: center;
  width: 32px;
}

.btn-remove {
  background: red;
}

.btn-update {
  background: green;
}
</style>
